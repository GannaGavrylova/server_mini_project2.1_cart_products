import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

function connectToDatabase() {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connect to MongoDG"))
    .catch((error) => console.log("Failed connected to MongoDB", error));
}

export default connectToDatabase;
