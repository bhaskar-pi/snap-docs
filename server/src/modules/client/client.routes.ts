import { Router } from "express";
import { sendDocumentRequestToClient } from "./client.controller";
import { validateRequest } from "@middlewares/validate-request";
import { DocumentRequestValidation } from "./client.validator";
import { authenticateToken } from "@middlewares/authenticate";

const clientRouter = Router();

clientRouter.post(
  "/client/send-doc-request",
  validateRequest(DocumentRequestValidation),
  authenticateToken,
  sendDocumentRequestToClient
);

export default clientRouter;
