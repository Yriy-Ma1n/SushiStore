import { createSlice } from '@reduxjs/toolkit'
import type { Product } from '../../Types/Product'


const initialState: Product[] = []

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts: (state) => {
      return state
    },

  },
})


export const { getAllProducts } = productSlice.actions

export default productSlice.reducer