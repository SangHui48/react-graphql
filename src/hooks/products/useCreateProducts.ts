import { gql, useMutation } from "@apollo/client";

interface ProductInput {
    variables: {
        name: string;
        quantity: number;
    }
}

const CREATE_PRODUCT = gql`
        mutation createProduct($name:String!, $quantity:Int!){
            createProduct(variables:{name:$name, quantity:$quantity}){
                id
                name
                quantity
                createdAt
            }
        }
`

export const useCreateProduct = (): ((
    createProductInput: ProductInput,
) => any) => {
    const [createProduct] = useMutation(CREATE_PRODUCT, {
        update(cache, { data: { createProduct } }) {
            cache.modify({
                fields: {
                    products(existingProducts = []) {
                        const newProductRef = cache.writeFragment({
                            data: createProduct,
                            fragment: gql`
                                fragment NewProduct on Product{
                                    id
                                    name
                                    quantity
                                    createdAt
                                }
                            `
                        });
                        return [...existingProducts, newProductRef]
                    }
                }
            })
        },
        onCompleted() {
            console.log('completed')
        }
    });
    return createProduct
}