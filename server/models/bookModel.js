import mongoose from "mongoose"

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
  publisherData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publisher",
  },
  ratings: {
    type: Number,
    required: true,
  },
  pricing: {
    type: Number,
    required: true,
  },
})

export default mongoose.model("Book", BookModel)
