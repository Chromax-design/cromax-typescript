import { cloudinaryApi } from '@/services/Cloudinary'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [cloudinaryApi.reducerPath]: cloudinaryApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cloudinaryApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch