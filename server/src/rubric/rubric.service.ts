import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RubricServiceBase } from "./base/rubric.service.base";

@Injectable()
export class RubricService extends RubricServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
