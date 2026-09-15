import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'

//For persistent storage
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const reducer = combineReducers({
  cart : cartReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  //reducer:{
  //  cart: cartReducer
  //},
  //devTools: true,

  // For persistent storage
  reducer: persistedReducer,
})