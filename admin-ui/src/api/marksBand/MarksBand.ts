import { Criterion } from "../criterion/Criterion";
import { CriteriaGroup } from "../criteriaGroup/CriteriaGroup";
import { Rubric } from "../rubric/Rubric";

export type MarksBand = {
  bottom: number;
  createdAt: Date;
  criteria?: Array<Criterion>;
  criteriaGroup?: CriteriaGroup;
  id: string;
  name: string;
  rubric?: Rubric;
  top: number;
  updatedAt: Date;
};
