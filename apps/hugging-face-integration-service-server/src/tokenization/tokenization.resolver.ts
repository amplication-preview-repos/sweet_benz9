import * as graphql from "@nestjs/graphql";
import { TokenizationResolverBase } from "./base/tokenization.resolver.base";
import { Tokenization } from "./base/Tokenization";
import { TokenizationService } from "./tokenization.service";

@graphql.Resolver(() => Tokenization)
export class TokenizationResolver extends TokenizationResolverBase {
  constructor(protected readonly service: TokenizationService) {
    super(service);
  }
}
