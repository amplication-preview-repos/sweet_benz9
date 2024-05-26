import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TokenizationService } from "./tokenization.service";
import { TokenizationControllerBase } from "./base/tokenization.controller.base";

@swagger.ApiTags("tokenizations")
@common.Controller("tokenizations")
export class TokenizationController extends TokenizationControllerBase {
  constructor(protected readonly service: TokenizationService) {
    super(service);
  }
}
