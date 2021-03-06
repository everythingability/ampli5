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
  ValidateNested,
  IsOptional,
  IsString,
} from "class-validator";
import { CriterionCreateNestedManyWithoutMarksBandsInput } from "./CriterionCreateNestedManyWithoutMarksBandsInput";
import { Type } from "class-transformer";
import { CriteriaGroupWhereUniqueInput } from "../../criteriaGroup/base/CriteriaGroupWhereUniqueInput";
import { RubricWhereUniqueInput } from "../../rubric/base/RubricWhereUniqueInput";
@InputType()
class MarksBandCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  bottom!: number;

  @ApiProperty({
    required: false,
    type: () => CriterionCreateNestedManyWithoutMarksBandsInput,
  })
  @ValidateNested()
  @Type(() => CriterionCreateNestedManyWithoutMarksBandsInput)
  @IsOptional()
  @Field(() => CriterionCreateNestedManyWithoutMarksBandsInput, {
    nullable: true,
  })
  criteria?: CriterionCreateNestedManyWithoutMarksBandsInput;

  @ApiProperty({
    required: true,
    type: () => CriteriaGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CriteriaGroupWhereUniqueInput)
  @Field(() => CriteriaGroupWhereUniqueInput)
  criteriaGroup!: CriteriaGroupWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: () => RubricWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RubricWhereUniqueInput)
  @Field(() => RubricWhereUniqueInput)
  rubric!: RubricWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  top!: number;
}
export { MarksBandCreateInput };
