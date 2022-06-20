import { CriteriaGroupWhereInput } from "./CriteriaGroupWhereInput";
import { CriteriaGroupOrderByInput } from "./CriteriaGroupOrderByInput";

export type CriteriaGroupFindManyArgs = {
  where?: CriteriaGroupWhereInput;
  orderBy?: Array<CriteriaGroupOrderByInput>;
  skip?: number;
  take?: number;
};
