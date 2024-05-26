import { TokenizationUpdateManyWithoutModelsInput } from "./TokenizationUpdateManyWithoutModelsInput";

export type ModelUpdateInput = {
  accessToken?: string | null;
  modelName?: string | null;
  modelPath?: string | null;
  modelType?: string | null;
  tokenizations?: TokenizationUpdateManyWithoutModelsInput;
};
