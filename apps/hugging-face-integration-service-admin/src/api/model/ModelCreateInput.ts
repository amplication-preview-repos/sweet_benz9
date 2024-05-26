import { TokenizationCreateNestedManyWithoutModelsInput } from "./TokenizationCreateNestedManyWithoutModelsInput";

export type ModelCreateInput = {
  accessToken?: string | null;
  modelName?: string | null;
  modelPath?: string | null;
  modelType?: string | null;
  tokenizations?: TokenizationCreateNestedManyWithoutModelsInput;
};
