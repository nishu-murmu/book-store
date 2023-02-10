import express from "express"

//files
import {
  addBook,
  filterBooks,
  updateBook,
  deleteBook,
  getBook,
} from "../controllers/bookController.js"

const router = express.Router()

router.post("/create", addBook)
router.put("/update", updateBook)
router.put("/filter", filterBooks)
router.get("/get", getBook)
router.delete("/delete", deleteBook)

export default router
