import { NextFunction, Response, Request } from "express"
import BookModel from '../models/bookModel'
import validator from '../utils/validator'

const BookController = async (req: Request, res: Response, next: NextFunction) => {
    const {bookName, date, publishername, genre, pricing, ratings, covertype} = req.body
    try {
        const newBook = new BookModel({
            bookName: bookName,
            date: date,
            publisherName: publishername,
            genre: genre,
            pricing: pricing,
            ratings: ratings,
            coverType: covertype
        })

        const validatedData = validator(newBook, "book")
        console.log(validatedData, "data")

        const savedBook = await newBook.save()
        return res.status(200).json(savedBook)
    } catch (err) {
        next(err)
    }

}

export default BookController
