import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MarksBandResolverBase } from "./base/marksBand.resolver.base";
import { MarksBand } from "./base/MarksBand";
import { MarksBandService } from "./marksBand.service";

@graphql.Resolver(() => MarksBand)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MarksBandResolver extends MarksBandResolverBase {
  constructor(
    protected readonly service: MarksBandService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
