import { SortOrder } from "../../util/SortOrder";

export type TokenizationOrderByInput = {
  accessToken?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  modelId?: SortOrder;
  tokenizationName?: SortOrder;
  tokenizationType?: SortOrder;
  updatedAt?: SortOrder;
};
