import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type TokenizationCreateInput = {
  accessToken?: string | null;
  model?: ModelWhereUniqueInput | null;
  tokenizationName?: string | null;
  tokenizationType?: string | null;
};
