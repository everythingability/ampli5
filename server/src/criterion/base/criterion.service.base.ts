/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Criterion, MarksBand, Section } from "@prisma/client";

export class CriterionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CriterionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CriterionFindManyArgs>
  ): Promise<number> {
    return this.prisma.criterion.count(args);
  }

  async findMany<T extends Prisma.CriterionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CriterionFindManyArgs>
  ): Promise<Criterion[]> {
    return this.prisma.criterion.findMany(args);
  }
  async findOne<T extends Prisma.CriterionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CriterionFindUniqueArgs>
  ): Promise<Criterion | null> {
    return this.prisma.criterion.findUnique(args);
  }
  async create<T extends Prisma.CriterionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CriterionCreateArgs>
  ): Promise<Criterion> {
    return this.prisma.criterion.create<T>(args);
  }
  async update<T extends Prisma.CriterionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CriterionUpdateArgs>
  ): Promise<Criterion> {
    return this.prisma.criterion.update<T>(args);
  }
  async delete<T extends Prisma.CriterionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CriterionDeleteArgs>
  ): Promise<Criterion> {
    return this.prisma.criterion.delete(args);
  }

  async getMarksBand(parentId: string): Promise<MarksBand | null> {
    return this.prisma.criterion
      .findUnique({
        where: { id: parentId },
      })
      .marksBand();
  }

  async getSection(parentId: string): Promise<Section | null> {
    return this.prisma.criterion
      .findUnique({
        where: { id: parentId },
      })
      .section();
  }
}
