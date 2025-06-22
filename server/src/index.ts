import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRouter from "@routes/auth.routes";
import { ENV } from "./env";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", authRouter);

const port = ENV.PORT;

const connectMongoose = async () => {
  try {
    await mongoose.connect(ENV.MONGODB_CONNECTION_URL);
    console.log(`\x1b[36mMongoose connected! \x1b[0m`);
  } catch (error) {
    console.log(`\x1b[33m Error in mongoose connection! \x1b[0m`, error);
  }
};

connectMongoose();
app.listen(port, () => {
  console.log(`\x1b[32mServer running at http://localhost:${port}\x1b[0m`);
});
