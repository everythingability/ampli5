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
import { MarksBandCreateNestedManyWithoutCriteriaGroupsInput } from "./MarksBandCreateNestedManyWithoutCriteriaGroupsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { RubricWhereUniqueInput } from "../../rubric/base/RubricWhereUniqueInput";
@InputType()
class CriteriaGroupCreateInput {
  @ApiProperty({
    required: false,
    type: () => MarksBandCreateNestedManyWithoutCriteriaGroupsInput,
  })
  @ValidateNested()
  @Type(() => MarksBandCreateNestedManyWithoutCriteriaGroupsInput)
  @IsOptional()
  @Field(() => MarksBandCreateNestedManyWithoutCriteriaGroupsInput, {
    nullable: true,
  })
  marksBands?: MarksBandCreateNestedManyWithoutCriteriaGroupsInput;

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
}
export { CriteriaGroupCreateInput };