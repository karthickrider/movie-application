import express from "express";
import { AddMovie, DeleteMovie, ListMovie, MovieDetail, UpdateMovie } from "../controllers/movieController.js";

const router = express.Router()

router.get("/", ListMovie)

router.get("/:id",MovieDetail)

router.post("/", AddMovie)

router.put("/:id", UpdateMovie)

router.delete("/:id", DeleteMovie)

export default router;0