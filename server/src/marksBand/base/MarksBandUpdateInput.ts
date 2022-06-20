/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  ValidateNested,
  IsString,
} from "class-validator";
import { CriterionUpdateManyWithoutMarksBandsInput } from "./CriterionUpdateManyWithoutMarksBandsInput";
import { Type } from "class-transformer";
import { CriteriaGroupWhereUniqueInput } from "../../criteriaGroup/base/CriteriaGroupWhereUniqueInput";
import { RubricWhereUniqueInput } from "../../rubric/base/RubricWhereUniqueInput";
@InputType()
class MarksBandUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  bottom?: number;

  @ApiProperty({
    required: false,
    type: () => CriterionUpdateManyWithoutMarksBandsInput,
  })
  @ValidateNested()
  @Type(() => CriterionUpdateManyWithoutMarksBandsInput)
  @IsOptional()
  @Field(() => CriterionUpdateManyWithoutMarksBandsInput, {
    nullable: true,
  })
  criteria?: CriterionUpdateManyWithoutMarksBandsInput;

  @ApiProperty({
    required: false,
    type: () => CriteriaGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CriteriaGroupWhereUniqueInput)
  @IsOptional()
  @Field(() => CriteriaGroupWhereUniqueInput, {
    nullable: true,
  })
  criteriaGroup?: CriteriaGroupWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => RubricWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RubricWhereUniqueInput)
  @IsOptional()
  @Field(() => RubricWhereUniqueInput, {
    nullable: true,
  })
  rubric?: RubricWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  top?: number;
}
export { MarksBandUpdateInput };