/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SectionWhereUniqueInput } from "../../section/base/SectionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class SectionUpdateManyWithoutRubricsInput {
  @Field(() => [SectionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SectionWhereUniqueInput],
  })
  connect?: Array<SectionWhereUniqueInput>;

  @Field(() => [SectionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SectionWhereUniqueInput],
  })
  disconnect?: Array<SectionWhereUniqueInput>;

  @Field(() => [SectionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SectionWhereUniqueInput],
  })
  set?: Array<SectionWhereUniqueInput>;
}
export { SectionUpdateManyWithoutRubricsInput };
