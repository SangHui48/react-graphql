import React from 'react';
import { Product } from '../../../common/interfaces/product.interface';

const ProductGridItem: React.FC<{ product: Product }> = ({product}: {product: Product}) => {
    return(
        <div>
            <p>{product.id}</p>
            <p>{product.name}</p>
            <p>{product.quantity}</p>
            <p>{product.createdAt}</p>
        </div>
    );
}

export default ProductGridItem;