import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RubricResolverBase } from "./base/rubric.resolver.base";
import { Rubric } from "./base/Rubric";
import { RubricService } from "./rubric.service";

@graphql.Resolver(() => Rubric)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RubricResolver extends RubricResolverBase {
  constructor(
    protected readonly service: RubricService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
