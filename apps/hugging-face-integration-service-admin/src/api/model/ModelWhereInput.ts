import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TokenizationListRelationFilter } from "../tokenization/TokenizationListRelationFilter";

export type ModelWhereInput = {
  accessToken?: StringNullableFilter;
  id?: StringFilter;
  modelName?: StringNullableFilter;
  modelPath?: StringNullableFilter;
  modelType?: StringNullableFilter;
  tokenizations?: TokenizationListRelationFilter;
};
