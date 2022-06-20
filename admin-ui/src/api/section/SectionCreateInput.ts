import { CriterionCreateNestedManyWithoutSectionsInput } from "./CriterionCreateNestedManyWithoutSectionsInput";
import { RubricWhereUniqueInput } from "../rubric/RubricWhereUniqueInput";

export type SectionCreateInput = {
  criteria?: CriterionCreateNestedManyWithoutSectionsInput;
  name: string;
  rubric: RubricWhereUniqueInput;
};
