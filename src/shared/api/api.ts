import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Post = {
    userId: number
    id: number
    title: string
    body: string

}
export const JSON_PLACE_HOLDER_Api = createApi({
    reducerPath: 'JSON_Api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        // getPost: builder.query<Post, string>({
        //     query: (title) => `posts/${title}`,
        // }),
        getPosts: builder.query<Post[], void>({
            query: () => `posts/`,
        }),
    }),
})
export const {  useGetPostsQuery } = JSON_PLACE_HOLDER_Api
