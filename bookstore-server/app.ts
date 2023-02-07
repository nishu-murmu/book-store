import express, { Application, Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import ErrorMessage from './src/utils/errorMessage'

//controllers
import BookController from './src/controllers/book'
import PublisherController from './src/controllers/publisher'

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post("/book", BookController)
app.post("/publisher", PublisherController)

app.get("/", async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        return res.status(200).send("Hello world")
    } catch (e) {
        ErrorMessage("App crashed ")
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
