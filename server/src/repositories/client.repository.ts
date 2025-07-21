import { ClientModel } from "@models/client.model";
import { Client } from "@interfaces/client";
import { ClientDocumentRequest } from "@interfaces/documents";


/**
 * Retrieves a client based on their email and associated business ID.
 *
 * @param businessId - The unique identifier of the business linked to the client.
 * @param email - The email address of the client.
 * @returns The matching Client document, or null if not found.
 */
export const getClientByBusinessIdAndEmail = async (
  businessId: string,
  email: string
): Promise<Client | null> => {
  try {
    return await ClientModel.findOne({
      email,
      "businesses.businessId": businessId,
    });
  } catch (error) {
    console.error("getClientByBusinessIdAndEmail error:", error);
    throw error;
  }
};

export const createClient = async (client: Client): Promise<Client | null> => {
  try {
    return await ClientModel.create(client);
  } catch (error) {
    console.error("createClient error:", error);
    throw error;
  }
};

export const createClientWithData = (request: ClientDocumentRequest) => {
  const client = {
    fullName: request.fullName,
    email: request.email,
    phoneNumber: request.phoneNumber,
  };
};
