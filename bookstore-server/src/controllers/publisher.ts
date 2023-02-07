import { NextFunction, Response, Request } from "express"
import PublisherModel from '../models/bookModel'
import validator from '../utils/validator'

const PublisherController = async (req: Request, res: Response, next: NextFunction) => {
    const { publishername, address } = req.body
    try {
        const newPublisher = new PublisherModel({
            publisherName: publishername,
            address: address
        })

        const validatedData = validator(newPublisher, "publisher")
        console.log(validatedData, "data")

        const savedPublisher = await newPublisher.save()
        return res.status(200).json(savedPublisher)
    } catch (err) {
        next(err)
    }

}

export default PublisherController
