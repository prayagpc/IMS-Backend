import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";
import CategoryContoller from "./controllers/CategoryController.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Connecting  MongoDB at default port 27017.
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongo connected");
  })
  .catch((error) => {
    console.log(error);
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Add categories
app.post("/api/categories", CategoryContoller.addCategory);
//get all categories
app.get("/api/categories", CategoryContoller.allCategories);

//get category by id
app.get("/api/categories/:id", CategoryContoller.getCategory);

//update category
app.put("/api/categories/:id", CategoryContoller.updateCategory);

//delete category
app.delete("/api/categories/:id", CategoryContoller.deleteCategory);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
