import express, { Application, Request, Response, NextFunction} from 'express'
import bodyParser from 'body-parser'


//controllers

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post("/book") 
app.post("/publisher")

app.get("/", async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send("Hello world")
})

try {
    const PORT = 5005
    app.listen(PORT, (): void => {
        console.log(`Backend loaded in port ${PORT}`)
    })
} catch (e) {
    console.log(`Error whie loading backend: ${e}`)
}
