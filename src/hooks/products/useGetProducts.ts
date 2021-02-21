import { gql, useQuery } from "@apollo/client";
import { Product } from "../../common/interfaces/product.interface";

export const GET_PRODUCTS = gql`
    query {
        products{
                id
                name
                quantity
                createdAt 
        }
    }
`
export const useGetProducts = (): Product[] | undefined => {
    const {data} = useQuery(GET_PRODUCTS);
    console.log(data);
    return data?.products;
}