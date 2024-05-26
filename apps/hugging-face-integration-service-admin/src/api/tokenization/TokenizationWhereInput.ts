import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ModelWhereUniqueInput } from "../model/ModelWhereUniqueInput";

export type TokenizationWhereInput = {
  accessToken?: StringNullableFilter;
  id?: StringFilter;
  model?: ModelWhereUniqueInput;
  tokenizationName?: StringNullableFilter;
  tokenizationType?: StringNullableFilter;
};
