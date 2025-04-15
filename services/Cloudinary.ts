import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cloudinaryApi = createApi({
    reducerPath: 'cloudinaryApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/cloudinary/' }),
    endpoints: (builder) => ({
        getImageByAssetFolder: builder.query({
            query: (folder) => `images/${folder}`,
        })
    })
})

export const { useGetImageByAssetFolderQuery } = cloudinaryApi