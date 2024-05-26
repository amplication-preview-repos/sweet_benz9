import { TokenizationWhereInput } from "./TokenizationWhereInput";
import { TokenizationOrderByInput } from "./TokenizationOrderByInput";

export type TokenizationFindManyArgs = {
  where?: TokenizationWhereInput;
  orderBy?: Array<TokenizationOrderByInput>;
  skip?: number;
  take?: number;
};
