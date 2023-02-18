import { configureStore } from "@reduxjs/toolkit"
import {booksSlice} from '../reducers/BooksReducer.js'

export const store = configureStore({
  reducer: booksSlice.reducer
})
