import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useCreateProduct } from '../../../hooks/products/useCreateProducts';

interface FormData {
    name: string;
    quantity: number;
}

const ProductsForm: React.FC = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const history = useHistory();
    const createProduct = useCreateProduct();


    const onSubmit = handleSubmit(({ name, quantity }) => {
        createProduct({ variables: { name: name, quantity: quantity } });
        setTimeout(() => {
            history.push('/');
        }, 1000)
    })

    return (
        <div className="products-form">
            <form onSubmit={onSubmit}>
                <input type="text" name="name" ref={register} />
                <input type="text" name="quantity" ref={register({
                    valueAsNumber: true
                })} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default ProductsForm
