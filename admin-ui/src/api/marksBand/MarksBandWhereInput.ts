import { FloatFilter } from "../../util/FloatFilter";
import { CriterionListRelationFilter } from "../criterion/CriterionListRelationFilter";
import { CriteriaGroupWhereUniqueInput } from "../criteriaGroup/CriteriaGroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { RubricWhereUniqueInput } from "../rubric/RubricWhereUniqueInput";

export type MarksBandWhereInput = {
  bottom?: FloatFilter;
  criteria?: CriterionListRelationFilter;
  criteriaGroup?: CriteriaGroupWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
  rubric?: RubricWhereUniqueInput;
  top?: FloatFilter;
};
