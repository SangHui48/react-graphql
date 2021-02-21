import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductDetail } from '../../hooks/products/useGetProductDetail';

interface Params {
    id: string;
}

const Detail: React.FC = () => {
    const { id } = useParams<Params>();
    const result = useGetProductDetail(id);

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
                        </>
                    )
            }
        </div>
    );
}
export default Detail;