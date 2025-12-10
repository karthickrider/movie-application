import express from "express";

const router = express.Router()

router.get("/", (req,res) => {
    res.send("getting all movie list")

})

router.post("/", (req,res) => {
    res.send("Adding a new movie")
})

router.put("/:id", (req,res) => {
    res.send("Update a movie")
})

router.delete("/:id", (req,res) => {
    res.send("Delete a movie")
})

export default router;