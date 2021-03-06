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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { MarksBandWhereUniqueInput } from "../../marksBand/base/MarksBandWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { SectionWhereUniqueInput } from "../../section/base/SectionWhereUniqueInput";
@InputType()
class CriterionWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  advice?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  order?: IntFilter;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  text?: StringFilter;
}
export { CriterionWhereInput };
