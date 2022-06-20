import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MarksBandService } from "./marksBand.service";
import { MarksBandControllerBase } from "./base/marksBand.controller.base";

@swagger.ApiTags("marksBands")
@common.Controller("marksBands")
export class MarksBandController extends MarksBandControllerBase {
  constructor(
    protected readonly service: MarksBandService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
