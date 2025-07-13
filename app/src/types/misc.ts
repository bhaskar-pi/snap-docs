export interface Error {
  response: {
    data: {
      message: string;
    };
    statusText: string;
  };
  message: string;
}
