import { CriterionUpdateManyWithoutMarksBandsInput } from "./CriterionUpdateManyWithoutMarksBandsInput";
import { CriteriaGroupWhereUniqueInput } from "../criteriaGroup/CriteriaGroupWhereUniqueInput";
import { RubricWhereUniqueInput } from "../rubric/RubricWhereUniqueInput";

export type MarksBandUpdateInput = {
  bottom?: number;
  criteria?: CriterionUpdateManyWithoutMarksBandsInput;
  criteriaGroup?: CriteriaGroupWhereUniqueInput;
  name?: string;
  rubric?: RubricWhereUniqueInput;
  top?: number;
};
