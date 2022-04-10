import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import counter from "./counter";
import string from "./string";

export const store = configureStore({
  reducer: combineReducers({ counter, string })
})

// store.subscribe(() => console.log(store.getState()))

