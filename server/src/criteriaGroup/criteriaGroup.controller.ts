import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CriteriaGroupService } from "./criteriaGroup.service";
import { CriteriaGroupControllerBase } from "./base/criteriaGroup.controller.base";

@swagger.ApiTags("criteriaGroups")
@common.Controller("criteriaGroups")
export class CriteriaGroupController extends CriteriaGroupControllerBase {
  constructor(
    protected readonly service: CriteriaGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
