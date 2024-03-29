import mongoose from "mongoose"

import BookModel from "../models/bookModel.js"
import PublisherModel from "../models/publisherModel.js"

export const addBook = async (req, res, next) => {
  try {
    const { bookName, author, publisherName, ratings, pricing } = req.body
    const foundPublisher = await PublisherModel.findOne({
      publisherName: publisherName,
    })
    const newbook = new BookModel({
      bookName,
      author,
      publisherName,
      publisherData: foundPublisher._id,
      ratings,
      pricing,
    })
    const savedbook = await newbook.save()
    await PublisherModel.findOneAndUpdate(
      { publisherName: publisherName },
      { $push: { booksList: savedbook._id.toString() } }
    )
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

export const filterBooks = async (req, res, next) => {
  try {
    const { filter } = req.body
    let filteredData
    if (filter === "pricing")
      filteredData = await BookModel.find().sort({ pricing: -1 }).limit(5)
    else if (filter === "ratings")
      filteredData = await BookModel.find().sort({ ratings: -1 }).limit(5)
    else filteredData = await BookModel.find().sort().lean()

    res.status(200).json(filteredData)
  } catch (err) {
    next(err)
  }
}
export const getBook = async (req, res, next) => {
  try {
    const allBooks = await BookModel.find().populate("publisherData", "address").exec()
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
