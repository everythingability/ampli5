import { RubricWhereInput } from "./RubricWhereInput";
import { RubricOrderByInput } from "./RubricOrderByInput";

export type RubricFindManyArgs = {
  where?: RubricWhereInput;
  orderBy?: Array<RubricOrderByInput>;
  skip?: number;
  take?: number;
};
