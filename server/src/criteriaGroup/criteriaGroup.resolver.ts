import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CriteriaGroupResolverBase } from "./base/criteriaGroup.resolver.base";
import { CriteriaGroup } from "./base/CriteriaGroup";
import { CriteriaGroupService } from "./criteriaGroup.service";

@graphql.Resolver(() => CriteriaGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CriteriaGroupResolver extends CriteriaGroupResolverBase {
  constructor(
    protected readonly service: CriteriaGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
