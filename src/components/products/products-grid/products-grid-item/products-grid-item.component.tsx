import React from 'react';
import { Product } from '../../../../common/interfaces/product.interface';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { DELETE_PRODUCT } from '../../../../hooks/products/useDeleteProducts';
import { GET_PRODUCTS } from '../../../../hooks/products/useGetProducts';

interface GridItemProps {
    product: Product
}


const ProductGridItem: React.FC<GridItemProps> = ({ product }) => {
    const [DELETE] = useMutation(DELETE_PRODUCT, {
        refetchQueries: [
            { query: GET_PRODUCTS }
        ]
    })

    // const DeleteProduct = useDeleteProduct();

    const handleDelete = (product: Product, e: any) => {
        const { id } = product;
        e.stopPropagation();
        console.log(id)
        DELETE({ variables: { id: id } })
    }

    return (
        <List>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <button onClick={(e: any) => handleDelete(product, e)}>❌</button>
            {/*
                상세보기 예시를 위해 주석처리 
                <p>{product.quantity}</p>
                <p>{product.createdAt}</p>
             */}
        </List>
    );
}

export default ProductGridItem;

const List = styled.div`
    position:relative;
    padding: 0 0 10px 10px;
    margin-top:20px;
    border-bottom: 1px solid #eee;
    > p:nth-of-type(1) {
        display:inline-block;
        margin-bottom:8px;
    }
    > button {
        position:absolute;
        left: 50px;
        top:-5px;
        width:20px;
        height:15px;
        border:0;
        background:none;
        outline:none;
        cursor: pointer;
        text-align:center;
    }
`;