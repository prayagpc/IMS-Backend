import mongoose from "mongoose";

//Declare the Schema of Category

var categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
    unique: true,
    lowercase: true,
  },
});

//Export the model
const Category = mongoose.model("category", categorySchema);

export { Category };
