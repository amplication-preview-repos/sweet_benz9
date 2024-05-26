import { Tokenization as TTokenization } from "../api/tokenization/Tokenization";

export const TOKENIZATION_TITLE_FIELD = "tokenizationName";

export const TokenizationTitle = (record: TTokenization): string => {
  return record.tokenizationName?.toString() || String(record.id);
};
