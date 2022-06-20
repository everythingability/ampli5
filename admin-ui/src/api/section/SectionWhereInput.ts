import { CriterionListRelationFilter } from "../criterion/CriterionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RubricWhereUniqueInput } from "../rubric/RubricWhereUniqueInput";

export type SectionWhereInput = {
  criteria?: CriterionListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  rubric?: RubricWhereUniqueInput;
};
