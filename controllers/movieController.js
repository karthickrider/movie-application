import MovieModel from "../models/movieModel.js";

export const ListMovie = (req,res) => {
    res.send("getting all movie list")

}

export const AddMovie = async(req,res) => {
   const newMovie = new MovieModel({
        title : req.body.title,
        desc : req.body.desc
    })
    try {
        const movie = await newMovie.save()
        return res.status(201).json(movie);        
    } catch (error) {
        return res.status(400).json({"message" : error.message})
    }
}

export const UpdateMovie = (req,res) => {
    res.send("Update a movie")
}

export const DeleteMovie = (req,res) => {
    res.send("Delete a movie")
}