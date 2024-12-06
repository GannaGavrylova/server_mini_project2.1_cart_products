import express from "express";
import cors from "cors";
import "dotenv/config";
import connectToDatabase from "./db/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectToDatabase();

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
