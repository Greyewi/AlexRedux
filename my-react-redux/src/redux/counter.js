import { createSlice } from '@reduxjs/toolkit'
const moduleName = 'counter'

const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer