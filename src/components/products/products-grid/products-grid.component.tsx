import React from 'react';
import { Product } from '../../../common/interfaces/product.interface';
import ProductGridItem from './products-grid-item/products-grid-item.component';

interface ProductGridProps{
    products: Product[]
}

const ProductGrid: React.FC<ProductGridProps> = ({products}:ProductGridProps) => {
    return(
        <div className="product-grid">
            {products.map(product => (
                <div key={product.id}>
                    <ProductGridItem
                        product={product}
                    />
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;