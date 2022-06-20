import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CriterionResolverBase } from "./base/criterion.resolver.base";
import { Criterion } from "./base/Criterion";
import { CriterionService } from "./criterion.service";

@graphql.Resolver(() => Criterion)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CriterionResolver extends CriterionResolverBase {
  constructor(
    protected readonly service: CriterionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
