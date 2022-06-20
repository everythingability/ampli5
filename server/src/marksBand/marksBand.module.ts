import { Module } from "@nestjs/common";
import { MarksBandModuleBase } from "./base/marksBand.module.base";
import { MarksBandService } from "./marksBand.service";
import { MarksBandController } from "./marksBand.controller";
import { MarksBandResolver } from "./marksBand.resolver";

@Module({
  imports: [MarksBandModuleBase],
  controllers: [MarksBandController],
  providers: [MarksBandService, MarksBandResolver],
  exports: [MarksBandService],
})
export class MarksBandModule {}
