import express from 'express'

//files
import {
    addBook,
    updateBook,
    deleteBook,
    getBook,
} from '../controllers/bookController.js'

const router = express.Router()

router.post('/create', addBook)
router.put('/update', updateBook)
router.get('/get', getBook)
router.delete('/delete', deleteBook)

export default router
