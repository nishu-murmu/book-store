import BookModel from '../models/bookModel.js'

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

export const getBook = async (req, res, next) => {
    try {

        const allBooks = await BookModel.find()
        return res.status(200).json(allBooks)
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
