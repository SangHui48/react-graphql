import React from 'react';
import { Product } from '../../../../common/interfaces/product.interface';
import styled from 'styled-components';

interface GridItemProps {
    product: Product
}

const ProductGridItem: React.FC<GridItemProps> = ({ product }) => {
    return (
        <List>
            <p>{product.id}</p>
            <p>{product.name}</p>
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
    padding: 0 0 10px 10px;
    margin-top:20px;
    border-bottom: 1px solid #eee;
    > p:nth-of-type(1) {
        margin-bottom:8px;
    }
`;