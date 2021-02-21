import { gql, useQuery } from "@apollo/client";
import { Product } from "../../common/interfaces/product.interface";

// 리스트 상세보기
const GET_PRODUCT_DETAIL = gql`
    query product($id: Int!) {
        product(id: $id) {
            id
            name
            quantity
            createdAt
        }
    }
`;

// 리스트 디테일 Query
export const useGetProductDetail = (id: string): Product => {
    const { data } = useQuery(GET_PRODUCT_DETAIL, {
        variables: {
            id: Number(id)
        }
    })
    return data?.product;
}