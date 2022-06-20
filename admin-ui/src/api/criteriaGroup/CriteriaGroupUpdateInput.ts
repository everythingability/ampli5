import { MarksBandUpdateManyWithoutCriteriaGroupsInput } from "./MarksBandUpdateManyWithoutCriteriaGroupsInput";
import { RubricWhereUniqueInput } from "../rubric/RubricWhereUniqueInput";

export type CriteriaGroupUpdateInput = {
  marksBands?: MarksBandUpdateManyWithoutCriteriaGroupsInput;
  name?: string;
  rubric?: RubricWhereUniqueInput;
};
