import { configureStore } from '@reduxjs/toolkit'
import Reducer from "./counter";
import {COUNTER_INCREASE, COUNTER_DESCENDING, EDIT_STRING} from "./counter";

export const store = configureStore({
  reducer: Reducer,
})

store.subscribe(() => console.log(store.getState()))

export const handleUp = () => store.dispatch(({
  type: COUNTER_INCREASE,
  payload: store.getState().value + 1
}))

export const handleDown = () => store.dispatch(({
  type: COUNTER_DESCENDING,
  payload: store.getState().value - 1
}))

export const handleEditString = (value) => store.dispatch(({
  type: EDIT_STRING,
  payload: value
}))