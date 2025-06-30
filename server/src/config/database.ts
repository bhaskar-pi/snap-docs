import mongoose from "mongoose";
import { ENV } from "./env";

export const connectMongoose = async () => {
  try {
    await mongoose.connect(ENV.MONGODB_CONNECTION_URL);
    console.log(`\x1b[36mMongoose connected! \x1b[0m`);
  } catch (error) {
    console.log(`\x1b[33m Error in mongoose connection! \x1b[0m`, error);
  }
};
