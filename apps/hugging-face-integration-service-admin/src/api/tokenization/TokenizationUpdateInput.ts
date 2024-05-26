import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type TokenizationUpdateInput = {
  accessToken?: string | null;
  model?: ModelWhereUniqueInput | null;
  tokenizationName?: string | null;
  tokenizationType?: string | null;
};
