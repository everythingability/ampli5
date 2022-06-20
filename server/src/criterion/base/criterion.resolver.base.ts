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
import { CreateCriterionArgs } from "./CreateCriterionArgs";
import { UpdateCriterionArgs } from "./UpdateCriterionArgs";
import { DeleteCriterionArgs } from "./DeleteCriterionArgs";
import { CriterionFindManyArgs } from "./CriterionFindManyArgs";
import { CriterionFindUniqueArgs } from "./CriterionFindUniqueArgs";
import { Criterion } from "./Criterion";
import { MarksBand } from "../../marksBand/base/MarksBand";
import { Section } from "../../section/base/Section";
import { CriterionService } from "../criterion.service";

@graphql.Resolver(() => Criterion)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CriterionResolverBase {
  constructor(
    protected readonly service: CriterionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Criterion",
    action: "read",
    possession: "any",
  })
  async _criteriaMeta(
    @graphql.Args() args: CriterionFindManyArgs
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
  @graphql.Query(() => [Criterion])
  @nestAccessControl.UseRoles({
    resource: "Criterion",
    action: "read",
    possession: "any",
  })
  async criteria(
    @graphql.Args() args: CriterionFindManyArgs
  ): Promise<Criterion[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Criterion, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Criterion",
    action: "read",
    possession: "own",
  })
  async criterion(
    @graphql.Args() args: CriterionFindUniqueArgs
  ): Promise<Criterion | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Criterion)
  @nestAccessControl.UseRoles({
    resource: "Criterion",
    action: "create",
    possession: "any",
  })
  async createCriterion(
    @graphql.Args() args: CreateCriterionArgs
  ): Promise<Criterion> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        marksBand: {
          connect: args.data.marksBand,
        },

        section: {
          connect: args.data.section,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Criterion)
  @nestAccessControl.UseRoles({
    resource: "Criterion",
    action: "update",
    possession: "any",
  })
  async updateCriterion(
    @graphql.Args() args: UpdateCriterionArgs
  ): Promise<Criterion | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          marksBand: {
            connect: args.data.marksBand,
          },

          section: {
            connect: args.data.section,
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

  @graphql.Mutation(() => Criterion)
  @nestAccessControl.UseRoles({
    resource: "Criterion",
    action: "delete",
    possession: "any",
  })
  async deleteCriterion(
    @graphql.Args() args: DeleteCriterionArgs
  ): Promise<Criterion | null> {
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
  @graphql.ResolveField(() => MarksBand, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MarksBand",
    action: "read",
    possession: "any",
  })
  async marksBand(
    @graphql.Parent() parent: Criterion
  ): Promise<MarksBand | null> {
    const result = await this.service.getMarksBand(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Section, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "read",
    possession: "any",
  })
  async section(@graphql.Parent() parent: Criterion): Promise<Section | null> {
    const result = await this.service.getSection(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
