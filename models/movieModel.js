import { model, Schema } from "mongoose";

const schema =new Schema({
    title : String,
    desc : String
})

const MovieModel = model("Movie",schema)

export default MovieModel;
