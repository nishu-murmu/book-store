import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    booksList: [],
    deleteBook: false
}
export const booksSlice = createSlice({
    name: "booksSlice",
    initialState,
    reducers: {
        // listBooks() { },
        deleteBooks(state) {
            state.deleteBook = !state.deleteBook
        },
    },
})

export const booksActions = booksSlice.actions
