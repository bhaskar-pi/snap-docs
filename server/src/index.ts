import express from "express";
import cors from "cors";

import authRouter from "modules/auth/auth.routes";
import { ENV } from "./config/env";
import { connectMongoose } from "config/database";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", authRouter);

const port = ENV.PORT;

connectMongoose();
app.listen(port, () => {
  console.log(`\x1b[32mServer running at http://localhost:${port}\x1b[0m`);
});
