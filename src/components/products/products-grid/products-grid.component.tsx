import React from 'react';
import { useHistory } from 'react-router-dom';
import { Product } from '../../../common/interfaces/product.interface';
import ProductGridItem from './products-grid-item/products-grid-item.component';
import styled from 'styled-components';

interface ProductGridProps {
    products: Product[]
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {

    const history = useHistory();
    const handleDetail = (target: Product) => {
        const { id } = target;
        history.push(`/product/${id}`)
    }

    return (
        <div className="product-grid">
            {products.map(product => (
                <GridItem key={product.id}
                    onClick={() => handleDetail(product)}
                >
                    <ProductGridItem
                        product={product}
                    />
                </GridItem>
            ))}
        </div>
    );
}

export default ProductGrid;

const GridItem = styled.div`
    padding: 10px 0;
    cursor: pointer;
`;