import express, { Application, Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'

//controllers
import BookController from './src/controllers/book'
import PublisherController from './src/controllers/publisher'

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// app.post("/book", BookController)
app.get("/book", (req: Request, res: Response) => {
    res.send("books api done")
})
// app.post("/publisher", PublisherController)

app.get("/", async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        return res.status(200).send("Hello world")
    } catch (e) {
        next(e)
    }
    return res.send("I'm broken")
})

try {
    const PORT = 5005
    app.listen(PORT, (): void => {
        console.log(`Backend loaded in port ${PORT}`)
    })
} catch (e) {
    console.log(`Error whie loading backend: ${e}`)
}
