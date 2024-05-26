import { Model } from "../model/Model";

export type Tokenization = {
  accessToken: string | null;
  createdAt: Date;
  id: string;
  model?: Model | null;
  tokenizationName: string | null;
  tokenizationType: string | null;
  updatedAt: Date;
};
