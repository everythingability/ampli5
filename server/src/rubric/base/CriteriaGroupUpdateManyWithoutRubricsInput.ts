/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CriteriaGroupWhereUniqueInput } from "../../criteriaGroup/base/CriteriaGroupWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class CriteriaGroupUpdateManyWithoutRubricsInput {
  @Field(() => [CriteriaGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CriteriaGroupWhereUniqueInput],
  })
  connect?: Array<CriteriaGroupWhereUniqueInput>;

  @Field(() => [CriteriaGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CriteriaGroupWhereUniqueInput],
  })
  disconnect?: Array<CriteriaGroupWhereUniqueInput>;

  @Field(() => [CriteriaGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CriteriaGroupWhereUniqueInput],
  })
  set?: Array<CriteriaGroupWhereUniqueInput>;
}
export { CriteriaGroupUpdateManyWithoutRubricsInput };
