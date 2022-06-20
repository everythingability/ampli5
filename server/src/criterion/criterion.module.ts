import { Module } from "@nestjs/common";
import { CriterionModuleBase } from "./base/criterion.module.base";
import { CriterionService } from "./criterion.service";
import { CriterionController } from "./criterion.controller";
import { CriterionResolver } from "./criterion.resolver";

@Module({
  imports: [CriterionModuleBase],
  controllers: [CriterionController],
  providers: [CriterionService, CriterionResolver],
  exports: [CriterionService],
})
export class CriterionModule {}
