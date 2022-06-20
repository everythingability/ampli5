/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SectionService } from "../section.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SectionCreateInput } from "./SectionCreateInput";
import { SectionWhereInput } from "./SectionWhereInput";
import { SectionWhereUniqueInput } from "./SectionWhereUniqueInput";
import { SectionFindManyArgs } from "./SectionFindManyArgs";
import { SectionUpdateInput } from "./SectionUpdateInput";
import { Section } from "./Section";
import { CriterionFindManyArgs } from "../../criterion/base/CriterionFindManyArgs";
import { Criterion } from "../../criterion/base/Criterion";
import { CriterionWhereUniqueInput } from "../../criterion/base/CriterionWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SectionControllerBase {
  constructor(
    protected readonly service: SectionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Section })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: SectionCreateInput): Promise<Section> {
    return await this.service.create({
      data: {
        ...data,

        rubric: {
          connect: data.rubric,
        },
      },
      select: {
        createdAt: true,
        id: true,
        name: true,

        rubric: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Section] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(SectionFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Section[]> {
    const args = plainToClass(SectionFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,

        rubric: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Section })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: SectionWhereUniqueInput
  ): Promise<Section | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,

        rubric: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Section })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: SectionWhereUniqueInput,
    @common.Body() data: SectionUpdateInput
  ): Promise<Section | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          rubric: {
            connect: data.rubric,
          },
        },
        select: {
          createdAt: true,
          id: true,
          name: true,

          rubric: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Section })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: SectionWhereUniqueInput
  ): Promise<Section | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,

          rubric: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Criterion",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/criteria")
  @ApiNestedQuery(CriterionFindManyArgs)
  async findManyCriteria(
    @common.Req() request: Request,
    @common.Param() params: SectionWhereUniqueInput
  ): Promise<Criterion[]> {
    const query = plainToClass(CriterionFindManyArgs, request.query);
    const results = await this.service.findCriteria(params.id, {
      ...query,
      select: {
        advice: true,
        createdAt: true,
        id: true,

        marksBand: {
          select: {
            id: true,
          },
        },

        order: true,

        section: {
          select: {
            id: true,
          },
        },

        text: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/criteria")
  async connectCriteria(
    @common.Param() params: SectionWhereUniqueInput,
    @common.Body() body: CriterionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      criteria: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/criteria")
  async updateCriteria(
    @common.Param() params: SectionWhereUniqueInput,
    @common.Body() body: CriterionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      criteria: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Section",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/criteria")
  async disconnectCriteria(
    @common.Param() params: SectionWhereUniqueInput,
    @common.Body() body: CriterionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      criteria: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
