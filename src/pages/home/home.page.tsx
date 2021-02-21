import React from  'react';
import ProductGrid from '../../components/products/products-grid/products-grid.component';
import { useGetProducts } from '../../hooks/products/useGetProducts';

const Home: React.FC = () => {

    const products = useGetProducts();

    return(
        <div className="home">
            <ProductGrid products={products || [] }/>
        </div>
    );
}

export default Home;