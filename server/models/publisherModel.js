import mongoose from 'mongoose'

const PublisherModel = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  publisherName: {
    type: String,
    required: true,
  },
})

export default mongoose.model('publisherInfo', PublisherModel)
