import express from "express";
import { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const Port = process.env.PORT || 5000;
app.listen(Port, () =>
  console.log(`Server started on port http://localhost:${Port}`)
);

mongoose.Promise = Promise;
const MONGO_URL = process.env.Mongo_URl as string;
mongoose.connect(MONGO_URL);
