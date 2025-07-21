import { Router } from "express";
import { sendDocumentRequestToClient } from "@controllers/client.controller";
import { DocumentRequestValidation } from "@request-validators/client.validator";
import { authenticateToken } from "@middlewares/authenticate";
import { validateRequest } from "@middlewares/validate-request";

const clientRouter = Router();

clientRouter.post(
  "/client/send-doc-request",
  validateRequest(DocumentRequestValidation),
  authenticateToken,
  sendDocumentRequestToClient
);

export default clientRouter;
