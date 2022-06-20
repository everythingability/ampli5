import { Module } from "@nestjs/common";
import { CriteriaGroupModuleBase } from "./base/criteriaGroup.module.base";
import { CriteriaGroupService } from "./criteriaGroup.service";
import { CriteriaGroupController } from "./criteriaGroup.controller";
import { CriteriaGroupResolver } from "./criteriaGroup.resolver";

@Module({
  imports: [CriteriaGroupModuleBase],
  controllers: [CriteriaGroupController],
  providers: [CriteriaGroupService, CriteriaGroupResolver],
  exports: [CriteriaGroupService],
})
export class CriteriaGroupModule {}
