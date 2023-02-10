import mongoose from "mongoose"

import BookModel from "../models/bookModel.js"

export const addBook = async (req, res, next) => {
    try {
        const { bookName, author, publisherName, ratings, pricing } = req.body
        const newbook = new BookModel({
            bookName,
            author,
            publisherName,
            ratings,
            pricing,
        })
        const savedbook = await newbook.save()
        res.status(200).json(savedbook)
    } catch (err) {
        next(err)
    }
}

export const updateBook = async (req, res, next) => {
    const { field, id } = req.body
    let updatedValue
    typeof req.body.updatedValue === "string"
        ? (updatedValue = req.body.updatedValue)
        : (updatedValue = JSON.parse(req.body.updatedValue))
    try {
        const updatedBook = await BookModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    [field]: updatedValue,
                },
            }
        )
        res.status(200).json(updatedBook)
    } catch (err) {
        next(err)
    }
}

export const getBook = async (req, res, next) => {
    try {
        const allBooks = await BookModel.find()
        res.status(200).json(allBooks)
    } catch (err) {
        next(err)
    }
}
export const deleteBook = async (req, res, next) => {
    try {
        await BookModel.deleteOne({
            _id: mongoose.Types.ObjectId(req.body.id),
        })
        res.status(200).json("Book Deleted!")
    } catch (err) {
        next(err)
    }
}
