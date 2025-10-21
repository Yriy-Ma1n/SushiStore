import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../../Types/Product'


const initialState: Product[] = []

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts: (state) => {
      return state
    },
    setItems(state, payload:PayloadAction<Product[]>){
      return payload.payload
    }

  },
})


export const { getAllProducts, setItems } = productSlice.actions

export default productSlice.reducer