import { configureStore } from '@reduxjs/toolkit'
import { UserSlice } from './features/user/userSlice'

export const store = configureStore({
  reducer: { user: UserSlice.reducer },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch