export interface AssociatedBusiness {
  businessId: string;
  businessEmail: string;

  /**
   * Notes added by the business owner about the client.
   */
  notes?: string;
}

export interface Client {
  fullName: string;
  email: string;
  phoneNumber?: string;

  /**
   * These properties indicate which business this client is associated with.
   */
  businesses: AssociatedBusiness[];
}
