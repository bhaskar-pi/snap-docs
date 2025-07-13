import express from "express";
import cors from "cors";
import { ENV } from "@config/env";
import { connectMongoose } from "@config/database";

import authRouter from "@modules/auth/auth.routes";
import businessRouter from "@modules/business/business.routes";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/business", authRouter);
app.use("/api/business", businessRouter);

const port = ENV.PORT;

connectMongoose();
app.listen(port, () => {
  console.log(`\x1b[32mServer running at http://localhost:${port}\x1b[0m`);
});
