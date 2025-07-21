import cors from "cors";
import express from "express";
import { connectMongoose } from "@config/database";
import { ENV } from "@config/env";
import authRouter from "@routes/auth.routes";
import businessRouter from "@routes/business.routes";
import clientRouter from "@routes/client.routes";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", authRouter);
app.use("/api", businessRouter);
app.use("/api", clientRouter);

const port = ENV.PORT;

connectMongoose();
app.listen(port, () => {
  console.log(`\x1b[32mServer running at http://localhost:${port}\x1b[0m`);
});
