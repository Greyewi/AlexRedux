import { createSlice } from '@reduxjs/toolkit'
const moduleName = 'string'

const initialState = {
  value: ''
}

export const counterSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    editString: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { editString } = counterSlice.actions

export default counterSlice.reducer