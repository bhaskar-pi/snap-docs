import { Response } from "express";
import { ExpressRequest } from "@interfaces/express";
import { ClientDocumentRequest } from "@interfaces/documents";
import { createClient, getClientByBusinessIdAndEmail } from "./client.service";

export const sendDocumentRequestToClient = async (
  request: ExpressRequest,
  response: Response
) => {
  try {
    const documentRequest: ClientDocumentRequest = request.body;

    const businessId = request.businessId as string;
    const businessEmail = request.businessEmail as string;

    if (!businessId || !businessEmail) {
      response.status(400).json({ message: "Missing business context" });
    }

    const existingClient = await getClientByBusinessIdAndEmail(
      businessId,
      documentRequest.email
    );

    if (!existingClient) {
      const newClient = {
        fullName: documentRequest.fullName,
        email: documentRequest.email,
        phoneNumber: documentRequest.phoneNumber,
        businesses: [
          {
            businessId,
            businessEmail,
          },
        ],
      };

      await createClient(newClient);
    }

    // TODO: send email to client

    response.status(200).json({ message: "Document request processed." });
  } catch (error) {
    console.error("Error in sendDocumentRequestToClient:", error);
    response.status(500).json({ message: error });
  }
};
