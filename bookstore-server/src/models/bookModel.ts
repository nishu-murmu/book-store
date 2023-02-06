import { Schema, Document, model } from 'mongoose'

interface BookInterFace extends Document {
    bookName?: string,
    date?: Date,
    publisherName?: string,
    genre?: string,
    price?: number,
    ratings?: number,
    coverType?: string
}

const BookSchema: Schema = new Schema<BookInterFace>({
    bookName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    publisherName: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    ratings: {
        type: Number,
        required: true
    }
})

export default model<BookInterFace>("BookInfo", BookSchema)
