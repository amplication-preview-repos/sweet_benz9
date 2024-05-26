import { Module } from "@nestjs/common";
import { TokenizationModuleBase } from "./base/tokenization.module.base";
import { TokenizationService } from "./tokenization.service";
import { TokenizationController } from "./tokenization.controller";
import { TokenizationResolver } from "./tokenization.resolver";

@Module({
  imports: [TokenizationModuleBase],
  controllers: [TokenizationController],
  providers: [TokenizationService, TokenizationResolver],
  exports: [TokenizationService],
})
export class TokenizationModule {}
