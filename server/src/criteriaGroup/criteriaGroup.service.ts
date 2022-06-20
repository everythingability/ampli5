import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CriteriaGroupServiceBase } from "./base/criteriaGroup.service.base";

@Injectable()
export class CriteriaGroupService extends CriteriaGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
