import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MarksBandWhereUniqueInput } from "../marksBand/MarksBandWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { SectionWhereUniqueInput } from "../section/SectionWhereUniqueInput";

export type CriterionWhereInput = {
  advice?: StringNullableFilter;
  id?: StringFilter;
  marksBand?: MarksBandWhereUniqueInput;
  order?: IntFilter;
  section?: SectionWhereUniqueInput;
  text?: StringFilter;
};
