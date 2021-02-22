import { GET_PRODUCTS } from './useGetProducts';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';

// 리스트 삭제
export const DELETE_PRODUCT = gql`
    mutation deleteProduct($id: Int!) {
        deleteProduct(id:$id)
    }
`;

// export const useDeleteProduct = (): ((
//     id:number
// ) => any) => {
//     const [DELETE] = useMutation(DELETE_PRODUCT, {
//         refetchQueries: [
//             { query: GET_PRODUCTS }
//         ]
//     })
//     DELETE({ variables: { id: id } })
//     return id
// }