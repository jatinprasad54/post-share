import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";
//import userRoutes from "./routes/user.js";
//app.config
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/posts", postRoutes);
//app.use("/users", userRoutes); //User login routes

// app.get("/", (req, res) => {
//   res.send("Hello to Memories API");
// });

app.get("/", (req, res) => {
  res.send("Hello to post share API");
});
// const connection_url =
//   "mongodb+srv://admin-jatin:test123@cluster0.0euul.mongodb.net/instaDB?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
