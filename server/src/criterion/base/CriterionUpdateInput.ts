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
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { MarksBandWhereUniqueInput } from "../../marksBand/base/MarksBandWhereUniqueInput";
import { Type } from "class-transformer";
import { SectionWhereUniqueInput } from "../../section/base/SectionWhereUniqueInput";
@InputType()
class CriterionUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  advice?: string | null;

  @ApiProperty({
    required: false,
    type: () => MarksBandWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MarksBandWhereUniqueInput)
  @IsOptional()
  @Field(() => MarksBandWhereUniqueInput, {
    nullable: true,
  })
  marksBand?: MarksBandWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  order?: number;

  @ApiProperty({
    required: false,
    type: () => SectionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SectionWhereUniqueInput)
  @IsOptional()
  @Field(() => SectionWhereUniqueInput, {
    nullable: true,
  })
  section?: SectionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text?: string;
}
export { CriterionUpdateInput };
