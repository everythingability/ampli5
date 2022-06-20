import { CriteriaGroupListRelationFilter } from "../criteriaGroup/CriteriaGroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MarksBandListRelationFilter } from "../marksBand/MarksBandListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SectionListRelationFilter } from "../section/SectionListRelationFilter";

export type RubricWhereInput = {
  criteriaGroups?: CriteriaGroupListRelationFilter;
  id?: StringFilter;
  marksBands?: MarksBandListRelationFilter;
  owner?: UserWhereUniqueInput;
  sections?: SectionListRelationFilter;
};
