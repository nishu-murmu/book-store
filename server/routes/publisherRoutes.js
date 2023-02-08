import express from 'express'

//files
import {addPublisher, deletePublisher, getPublisher} from '../controllers/publisherController.js'


const router = express.Router()

router.post("/create", addPublisher)
router.get("/get", getPublisher)
router.delete("/delete", deletePublisher)

export default router
