import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CriterionService } from "./criterion.service";
import { CriterionControllerBase } from "./base/criterion.controller.base";

@swagger.ApiTags("criteria")
@common.Controller("criteria")
export class CriterionController extends CriterionControllerBase {
  constructor(
    protected readonly service: CriterionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
