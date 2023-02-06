import { Schema, Document, model } from 'mongoose'

interface PublisherInterFace extends Document {
    address?: string,
    publisherName?: string,
}

const PublisherSchema: Schema = new Schema<PublisherInterFace>({
    publisherName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
})

export default model<PublisherInterFace>("BookInfo", PublisherSchema)
