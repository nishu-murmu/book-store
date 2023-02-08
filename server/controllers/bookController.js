import BookModel from "../models/bookModel.js" 

export const addBook = async (req, res, next) => {
  try {
    const { bookname, author, publishername, ratings, price } = req.body
    const newbook = new BookModel({
      bookname,
      author,
      publishername,
      ratings,
      price,
    })
    const savedbook = await newbook.save()
    res.status(200).json(savedbook)
  } catch (err) {
    next(err)
  }
}

export const getBook = async (req, res, next) => {
  try {
    return res.status(200).json()
  } catch (err) {
    next(err)
  }
}
export const deleteBook = async (req, res, next) => {
  try {
    return res.status(200).json()
  } catch (err) {
    next(err)
  }
}