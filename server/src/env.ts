import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: Number(process.env.PORT),
  MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL || " ",
  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY || "",
};
