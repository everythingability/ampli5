import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MarksBandServiceBase } from "./base/marksBand.service.base";

@Injectable()
export class MarksBandService extends MarksBandServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
