import { CriterionUpdateManyWithoutSectionsInput } from "./CriterionUpdateManyWithoutSectionsInput";
import { RubricWhereUniqueInput } from "../rubric/RubricWhereUniqueInput";

export type SectionUpdateInput = {
  criteria?: CriterionUpdateManyWithoutSectionsInput;
  name?: string;
  rubric?: RubricWhereUniqueInput;
};
