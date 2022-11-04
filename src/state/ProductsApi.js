import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const ProductsApi = createApi({
    reducerPath: "ProductsApi",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    endpoints: (builder) =>({
        getAllProducts: builder.query({
            query:() => `products`,
        })
    })
})
export const {useGetAllProductsQuery} = ProductsApi