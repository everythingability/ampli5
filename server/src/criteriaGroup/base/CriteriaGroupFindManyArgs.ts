/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CriteriaGroupWhereInput } from "./CriteriaGroupWhereInput";
import { Type } from "class-transformer";
import { CriteriaGroupOrderByInput } from "./CriteriaGroupOrderByInput";

@ArgsType()
class CriteriaGroupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CriteriaGroupWhereInput,
  })
  @Field(() => CriteriaGroupWhereInput, { nullable: true })
  @Type(() => CriteriaGroupWhereInput)
  where?: CriteriaGroupWhereInput;

  @ApiProperty({
    required: false,
    type: [CriteriaGroupOrderByInput],
  })
  @Field(() => [CriteriaGroupOrderByInput], { nullable: true })
  @Type(() => CriteriaGroupOrderByInput)
  orderBy?: Array<CriteriaGroupOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CriteriaGroupFindManyArgs };
