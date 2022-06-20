import { StringFilter } from "../../util/StringFilter";
import { MarksBandListRelationFilter } from "../marksBand/MarksBandListRelationFilter";
import { RubricWhereUniqueInput } from "../rubric/RubricWhereUniqueInput";

export type CriteriaGroupWhereInput = {
  id?: StringFilter;
  marksBands?: MarksBandListRelationFilter;
  name?: StringFilter;
  rubric?: RubricWhereUniqueInput;
};
