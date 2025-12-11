import express from "express";
import { AddMovie, DeleteMovie, ListMovie, UpdateMovie } from "../controllers/movieController.js";

const router = express.Router()

router.get("/", ListMovie)

router.post("/", AddMovie)

router.put("/:id", UpdateMovie)

router.delete("/:id", DeleteMovie)

export default router;