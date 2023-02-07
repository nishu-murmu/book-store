import joi from 'joi'

const Bookschema = joi.object({
  bookName: joi.string().min(3).max(20).trim(true).required(),
  date: joi.date().required(),
  publisherName: joi.string().min(3).max(20).trim(true).required(),
  genre: joi.number().integer().min(3).max(20).trim(true).required(),
  ratings: joi.number().integer().min(3).max(20).trim(true).required(),
  coverType: joi.string().min(3).max(20).trim(true).required(),
})

const PublisherSchema = joi.object({
  publisherName: joi.string().min(3).max(20).trim().required(),
  address: joi.string().min(10).max(500).required(),
})
const validation = (payload, schema) => {
  if (schema == 'book') return schema.Bookschema(payload)
  else return PublisherSchema.validate(payload)
}

export default validation
