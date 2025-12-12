import { model, Schema } from "mongoose";

const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const MovieModel = model("Movie", schema);

export default MovieModel;
