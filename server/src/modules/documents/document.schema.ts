import { Schema } from "mongoose";

export const FileSchema = new Schema(
  {
    name: { type: String, required: true },
    size: { type: Number, required: true },
    url: { type: String, required: true },
    type: { type: String, required: true },
  },
  { _id: false }
);
