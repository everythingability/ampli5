import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RubricListRelationFilter } from "../rubric/RubricListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  rubrics?: RubricListRelationFilter;
  username?: StringFilter;
};
