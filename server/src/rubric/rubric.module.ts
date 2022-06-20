import { Module } from "@nestjs/common";
import { RubricModuleBase } from "./base/rubric.module.base";
import { RubricService } from "./rubric.service";
import { RubricController } from "./rubric.controller";
import { RubricResolver } from "./rubric.resolver";

@Module({
  imports: [RubricModuleBase],
  controllers: [RubricController],
  providers: [RubricService, RubricResolver],
  exports: [RubricService],
})
export class RubricModule {}
