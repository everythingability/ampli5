import { CriterionCreateNestedManyWithoutMarksBandsInput } from "./CriterionCreateNestedManyWithoutMarksBandsInput";
import { CriteriaGroupWhereUniqueInput } from "../criteriaGroup/CriteriaGroupWhereUniqueInput";
import { RubricWhereUniqueInput } from "../rubric/RubricWhereUniqueInput";

export type MarksBandCreateInput = {
  bottom: number;
  criteria?: CriterionCreateNestedManyWithoutMarksBandsInput;
  criteriaGroup: CriteriaGroupWhereUniqueInput;
  name: string;
  rubric: RubricWhereUniqueInput;
  top: number;
};
