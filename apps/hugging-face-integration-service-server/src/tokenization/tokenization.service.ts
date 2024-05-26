import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TokenizationServiceBase } from "./base/tokenization.service.base";

@Injectable()
export class TokenizationService extends TokenizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
