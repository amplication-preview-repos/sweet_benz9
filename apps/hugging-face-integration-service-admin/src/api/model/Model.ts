import { Tokenization } from "../tokenization/Tokenization";

export type Model = {
  accessToken: string | null;
  createdAt: Date;
  id: string;
  modelName: string | null;
  modelPath: string | null;
  modelType: string | null;
  tokenizations?: Array<Tokenization>;
  updatedAt: Date;
};
