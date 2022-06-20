import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RubricService } from "./rubric.service";
import { RubricControllerBase } from "./base/rubric.controller.base";

@swagger.ApiTags("rubrics")
@common.Controller("rubrics")
export class RubricController extends RubricControllerBase {
  constructor(
    protected readonly service: RubricService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
