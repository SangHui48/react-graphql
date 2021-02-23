import { gql } from '@apollo/client';

interface updateInput {
    fields: {
        name: string,
        quantity: number,
    },
    id: number
}

export const UPDATE_PRODUCT = gql`
    mutation updateProduct($name:String!, $quantity:Int!, $id:Int!){
        updateProduct(fields:{name:$name, quantity:$quantity}, id: $id)   
    }
`;