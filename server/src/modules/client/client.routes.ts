import { Router } from "express";

const clientRouter = Router();

clientRouter.post("/client/send-doc-request");

export default clientRouter;
