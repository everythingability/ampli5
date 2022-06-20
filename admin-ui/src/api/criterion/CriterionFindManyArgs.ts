import { CriterionWhereInput } from "./CriterionWhereInput";
import { CriterionOrderByInput } from "./CriterionOrderByInput";

export type CriterionFindManyArgs = {
  where?: CriterionWhereInput;
  orderBy?: Array<CriterionOrderByInput>;
  skip?: number;
  take?: number;
};
