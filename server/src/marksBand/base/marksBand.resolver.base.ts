/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateMarksBandArgs } from "./CreateMarksBandArgs";
import { UpdateMarksBandArgs } from "./UpdateMarksBandArgs";
import { DeleteMarksBandArgs } from "./DeleteMarksBandArgs";
import { MarksBandFindManyArgs } from "./MarksBandFindManyArgs";
import { MarksBandFindUniqueArgs } from "./MarksBandFindUniqueArgs";
import { MarksBand } from "./MarksBand";
import { CriterionFindManyArgs } from "../../criterion/base/CriterionFindManyArgs";
import { Criterion } from "../../criterion/base/Criterion";
import { CriteriaGroup } from "../../criteriaGroup/base/CriteriaGroup";
import { Rubric } from "../../rubric/base/Rubric";
import { MarksBandService } from "../marksBand.service";

@graphql.Resolver(() => MarksBand)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MarksBandResolverBase {
  constructor(
    protected readonly service: MarksBandService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MarksBand",
    action: "read",
    possession: "any",
  })
  async _marksBandsMeta(
    @graphql.Args() args: MarksBandFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MarksBand])
  @nestAccessControl.UseRoles({
    resource: "MarksBand",
    action: "read",
    possession: "any",
  })
  async marksBands(
    @graphql.Args() args: MarksBandFindManyArgs
  ): Promise<MarksBand[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MarksBand, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MarksBand",
    action: "read",
    possession: "own",
  })
  async marksBand(
    @graphql.Args() args: MarksBandFindUniqueArgs
  ): Promise<MarksBand | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MarksBand)
  @nestAccessControl.UseRoles({
    resource: "MarksBand",
    action: "create",
    possession: "any",
  })
  async createMarksBand(
    @graphql.Args() args: CreateMarksBandArgs
  ): Promise<MarksBand> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        criteriaGroup: {
          connect: args.data.criteriaGroup,
        },

        rubric: {
          connect: args.data.rubric,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MarksBand)
  @nestAccessControl.UseRoles({
    resource: "MarksBand",
    action: "update",
    possession: "any",
  })
  async updateMarksBand(
    @graphql.Args() args: UpdateMarksBandArgs
  ): Promise<MarksBand | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          criteriaGroup: {
            connect: args.data.criteriaGroup,
          },

          rubric: {
            connect: args.data.rubric,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MarksBand)
  @nestAccessControl.UseRoles({
    resource: "MarksBand",
    action: "delete",
    possession: "any",
  })
  async deleteMarksBand(
    @graphql.Args() args: DeleteMarksBandArgs
  ): Promise<MarksBand | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Criterion])
  @nestAccessControl.UseRoles({
    resource: "Criterion",
    action: "read",
    possession: "any",
  })
  async criteria(
    @graphql.Parent() parent: MarksBand,
    @graphql.Args() args: CriterionFindManyArgs
  ): Promise<Criterion[]> {
    const results = await this.service.findCriteria(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CriteriaGroup, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CriteriaGroup",
    action: "read",
    possession: "any",
  })
  async criteriaGroup(
    @graphql.Parent() parent: MarksBand
  ): Promise<CriteriaGroup | null> {
    const result = await this.service.getCriteriaGroup(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Rubric, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Rubric",
    action: "read",
    possession: "any",
  })
  async rubric(@graphql.Parent() parent: MarksBand): Promise<Rubric | null> {
    const result = await this.service.getRubric(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
