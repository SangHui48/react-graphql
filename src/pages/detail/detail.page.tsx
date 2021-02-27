import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { useGetProductDetail } from '../../hooks/products/useGetProductDetail';
import { useMutation } from '@apollo/client';
import { UPDATE_PRODUCT } from '../../hooks/products/useUpdateProducts';
import { GET_PRODUCTS } from '../../hooks/products/useGetProducts';

interface Params {
    id: string;
}

interface UpdateInput {
    name: string,
    quantity: number,
}

const Detail: React.FC = () => {
    const { id } = useParams<Params>();
    const history = useHistory();
    const result = useGetProductDetail(id);
    const [update, setUpdate] = useState<boolean>(false);
    const [complete, setComplete] = useState<string>('')
    const [UPDATE, { error }] = useMutation(UPDATE_PRODUCT, {
        refetchQueries: [
            { query: GET_PRODUCTS }
        ],
        onCompleted() {
            setComplete('업데이트 되었습니다! 메인화면으로 이동합니다.');
            setTimeout(() => {
                history.push('/');
            }, 2000)
        },
        onError() {
            // quantity 값이 너무 높으면 에러 발생
            setComplete(`GraphQL Error : ${error}`)
        }
    })

    const [updateInput, setUpdateInput] = useState<UpdateInput>({
        name: '',
        quantity: 0,
    });

    const handleChange = (e: any): void => {
        const { value, name } = e;
        // debounce를 사용하면 이벤트 호출이 적어질듯.
        if (name === 'quantity') {
            setUpdateInput({
                ...updateInput,
                [name]: parseInt(value),
            });
        } else if (name === 'name') {
            setUpdateInput({
                ...updateInput,
                [name]: value
            });
        }
    }

    const handleUpdateToggle = (): void => {
        setUpdate(!update);
        setUpdateInput({
            name: result?.name,
            quantity: result?.quantity
        })
    }

    const handleUpdateResult = () => {
        if (updateInput.name !== '' && updateInput.quantity !== result?.quantity) {
            UPDATE({
                variables: {
                    name: updateInput.name,
                    quantity: updateInput.quantity,
                    id: result?.id
                }
            });
        }
        // setTimeout(() => {
        //     setComplete('');
        // }, 3000)
    }

    return (
        <div className="detail">
            {
                result === undefined || result === null ? (
                    <p>Loading...</p>
                ) : (
                        <>
                            <p>id : {result?.id}</p>
                            <p>name : {result?.name}</p>
                            <p>quantity : {result?.quantity}</p>
                            <p>createdAt : {result?.createdAt}</p>
                            <button onClick={handleUpdateToggle}>{update ? '취소' : '수정'}</button>
                        </>
                    )
            }
            {
                complete?.length > 0 &&
                <UpdateGuide>{complete}</UpdateGuide>
            }
            {
                update &&
                <UpdateInputWrapper>
                    <input type="text" name="name" id="name" value={updateInput.name} onChange={(e) => handleChange(e.target)} />
                    <input type="number" name="quantity" id="name" value={updateInput.quantity} onChange={(e) => handleChange(e.target)} />
                    <button type="button" onClick={handleUpdateResult} title="수정">수정</button>
                </UpdateInputWrapper>
            }
        </div>
    );
}
export default Detail;

const UpdateInputWrapper = styled.div`
    display:block;
    margin-top:20px;
`

const UpdateGuide = styled.p`
    display:block;
    margin-top:10px;
    font-size:18px;
    color:red;
`;