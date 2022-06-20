import { CriteriaGroupUpdateManyWithoutRubricsInput } from "./CriteriaGroupUpdateManyWithoutRubricsInput";
import { MarksBandUpdateManyWithoutRubricsInput } from "./MarksBandUpdateManyWithoutRubricsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SectionUpdateManyWithoutRubricsInput } from "./SectionUpdateManyWithoutRubricsInput";

export type RubricUpdateInput = {
  criteriaGroups?: CriteriaGroupUpdateManyWithoutRubricsInput;
  marksBands?: MarksBandUpdateManyWithoutRubricsInput;
  owner?: UserWhereUniqueInput;
  sections?: SectionUpdateManyWithoutRubricsInput;
};
