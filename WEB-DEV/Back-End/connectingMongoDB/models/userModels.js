const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  age: {
    type: Number,
    required: true,
  },
});

const userModel = model("User", userSchema); //model("ModelName", schema) creates a model based on the provided schema. The first argument is the name of the model, and the second argument is the schema to use for that model.

module.exports = userModel; // Exporting the userModel so it can be used in other files. This allows other parts of the application to interact with the User collection in the MongoDB database using this model.
