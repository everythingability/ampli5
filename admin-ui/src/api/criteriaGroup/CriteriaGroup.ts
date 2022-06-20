import { MarksBand } from "../marksBand/MarksBand";
import { Rubric } from "../rubric/Rubric";

export type CriteriaGroup = {
  createdAt: Date;
  id: string;
  marksBands?: Array<MarksBand>;
  name: string;
  rubric?: Rubric;
  updatedAt: Date;
};
