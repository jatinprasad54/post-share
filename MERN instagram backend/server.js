import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";
//import userRoutes from "./routes/user.js";
//app.config
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/posts", postRoutes);
//app.use("/users", userRoutes); //User login routes

// app.get("/", (req, res) => {
//   res.send("Hello to Memories API");
// });

app.get("/", (req, res) => {
  console.log(req);
  res.send("Hello to Memories API");
});
const connection_url =
  "mongodb+srv://admin-jatin:test123@cluster0.0euul.mongodb.net/instaDB?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose
  .connect(connection_url, {
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
