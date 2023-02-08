import express from 'express'

//files
import {addBook, deleteBook, getBook} from '../controllers/bookController.js'


const router = express.Router()

router.post("/create", addBook)
router.get("/get", getBook)
router.delete("/delete", deleteBook)

export default router
