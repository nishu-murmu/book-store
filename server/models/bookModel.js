import mongoose from 'mongoose'

const BookModel = mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisherName: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

export default mongoose.model('bookInfo', BookModel)
