import mongoose from "mongoose"

const PublisherModel = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  publisherName: {
    type: String,
    required: true,
  },
  booksList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
})

export default mongoose.model("Publisher", PublisherModel)
