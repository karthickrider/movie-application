import express from "express"
import movieRoutes from "./routes/movieRoutes.js"
import connectDB from "./lib/db.js";

const app = express();
const port = 6969;

app.use(express.json());
app.use(express.urlencoded({extended : true}))


connectDB();

app.get("/", (req,res) =>{
    res.json({msg : "Hello Express!"})
})

// using the middleware for the movie routes

app.use("/movies",movieRoutes)

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`)
})