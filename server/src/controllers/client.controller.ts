import { Response } from "express";
import { v4 as uuidV4 } from "uuid";
import { createClient, getClientByBusinessIdAndEmail } from "@repositories/client.repository";
import { JWTPayload } from "@interfaces/auth";
import { Client } from "@interfaces/client";
import { ClientDocumentRequest } from "@interfaces/documents";
import { ExpressRequest } from "@interfaces/express";


export const sendDocumentRequestToClient = async (
  request: ExpressRequest,
  response: Response
) => {
  try {
    const documentRequest: ClientDocumentRequest = request.body;

    const business: JWTPayload = request.business;

    if (!business) {
      response.status(400).json({ message: "Missing business context" });
    }

    /** create a client */

    let client = await getClientByBusinessIdAndEmail(
      business.id,
      documentRequest.email
    );

    if (!client) {
      const newClient: Client = {
        ...documentRequest,
        businesses: [
          {
            businessEmail: business.email,
            businessId: business.id,
          },
        ],
      };

      client = await createClient(newClient);
    }

    /** create a document */

    // sendDocumentRequestEmail(
    //   documentRequest.email,
    //   "https://codebybabu.com", // TODO: Replace with dynamic link if needed
    //   businessName
    // );

    response
      .status(200)
      .json({ message: "Document request sent successfully." });
  } catch (error) {
    console.error("Failed to send document request:", error);
    response.status(500).json({ message: "Failed to send document request." });
  }
};
