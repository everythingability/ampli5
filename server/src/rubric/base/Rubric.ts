/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CriteriaGroup } from "../../criteriaGroup/base/CriteriaGroup";
import { MarksBand } from "../../marksBand/base/MarksBand";
import { User } from "../../user/base/User";
import { Section } from "../../section/base/Section";
@ObjectType()
class Rubric {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [CriteriaGroup],
  })
  @ValidateNested()
  @Type(() => CriteriaGroup)
  @IsOptional()
  criteriaGroups?: Array<CriteriaGroup>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [MarksBand],
  })
  @ValidateNested()
  @Type(() => MarksBand)
  @IsOptional()
  marksBands?: Array<MarksBand>;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  owner?: User;

  @ApiProperty({
    required: false,
    type: () => [Section],
  })
  @ValidateNested()
  @Type(() => Section)
  @IsOptional()
  sections?: Array<Section>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Rubric };
