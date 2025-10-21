import { configureStore } from '@reduxjs/toolkit'
import { UserSlice } from './features/user/userSlice'
import { productSlice } from './features/product/productSlice'

export const store = configureStore({
  reducer: { user: UserSlice.reducer, product:productSlice.reducer },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch