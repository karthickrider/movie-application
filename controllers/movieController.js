import MovieModel from "../models/movieModel.js";

export const ListMovie = async (req, res) => {
  try {
    const movies = await MovieModel.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const MovieDetail = async (req, res) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    if (movie == null) {
      res.status(404).json({ message: "Movie not found" });
    } else {
      res.status(200).json(movie);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const AddMovie = async (req, res) => {
  const newMovie = new MovieModel({
    title: req.body.title,
    desc: req.body.desc,
  });
  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const UpdateMovie = async(req, res) => {
  try {
    const movie = await MovieModel.findOneAndUpdate(
        { _id: req.params.id },
        { title: req.body.title, desc: req.body.desc },
        {new : true}
      );
      res.status(200).json(movie)
  } catch (error) {
    res.status(500).json({message: error.message})
  }

};

export const DeleteMovie = async(req, res) => {
  const movieId = req.params.id;
  try {
    const balMovie = await MovieModel.findOneAndDelete({_id : movieId})   
    res.status(200).json({message : "Movie Deleted...!"}); 
  } catch (error) {
    res.status(500).json({message : error.message})
  }
  
};
