import { CriteriaGroupCreateNestedManyWithoutRubricsInput } from "./CriteriaGroupCreateNestedManyWithoutRubricsInput";
import { MarksBandCreateNestedManyWithoutRubricsInput } from "./MarksBandCreateNestedManyWithoutRubricsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SectionCreateNestedManyWithoutRubricsInput } from "./SectionCreateNestedManyWithoutRubricsInput";

export type RubricCreateInput = {
  criteriaGroups?: CriteriaGroupCreateNestedManyWithoutRubricsInput;
  marksBands?: MarksBandCreateNestedManyWithoutRubricsInput;
  owner: UserWhereUniqueInput;
  sections?: SectionCreateNestedManyWithoutRubricsInput;
};
