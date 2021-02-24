import { gql } from '@apollo/client';

export const UPDATE_PRODUCT = gql`
    mutation updateProduct($name:String!, $quantity:Int!, $id:Int!){
        updateProduct(fields:{name:$name, quantity:$quantity}, id: $id)   
    }
`;