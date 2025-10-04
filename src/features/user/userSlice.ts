import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../../Types/User'



const initialState: User | null = null

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // increment: (state) => {

    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
    getUserData(state) {
      return state
    }
  },
})


export const { getUserData } = UserSlice.actions

export default UserSlice.reducer