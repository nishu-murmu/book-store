import PublisherModel from "../models/publisherModel.js"

export const addPublisher = async (req, res, next) => {
  try {
    const { publisherName, address } = req.body
    const newpublisher = new PublisherModel({
      publisherName,
      address,
    })
    const savedpublisher = await newpublisher.save()
    res.status(200).json(savedpublisher)
  } catch (err) {
    next(err)
  }
}

export const getPublisher = async (req, res, next) => {
  try {
    const allPublishers = await PublisherModel.find()
      .populate("booksList", "ratings pricing")
      .exec()
    res.status(200).json(allPublishers)
  } catch (err) {
    next(err)
  }
}
export const deletePublisher = async (req, res, next) => {
  try {
    return res.status(200).json()
  } catch (err) {
    next(err)
  }
}
