/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MarksBandWhereUniqueInput } from "../../marksBand/base/MarksBandWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class MarksBandUpdateManyWithoutCriteriaGroupsInput {
  @Field(() => [MarksBandWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MarksBandWhereUniqueInput],
  })
  connect?: Array<MarksBandWhereUniqueInput>;

  @Field(() => [MarksBandWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MarksBandWhereUniqueInput],
  })
  disconnect?: Array<MarksBandWhereUniqueInput>;

  @Field(() => [MarksBandWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MarksBandWhereUniqueInput],
  })
  set?: Array<MarksBandWhereUniqueInput>;
}
export { MarksBandUpdateManyWithoutCriteriaGroupsInput };
