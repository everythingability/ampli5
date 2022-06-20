import { MarksBandCreateNestedManyWithoutCriteriaGroupsInput } from "./MarksBandCreateNestedManyWithoutCriteriaGroupsInput";
import { RubricWhereUniqueInput } from "../rubric/RubricWhereUniqueInput";

export type CriteriaGroupCreateInput = {
  marksBands?: MarksBandCreateNestedManyWithoutCriteriaGroupsInput;
  name: string;
  rubric: RubricWhereUniqueInput;
};
