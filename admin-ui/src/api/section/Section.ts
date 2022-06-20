import { Criterion } from "../criterion/Criterion";
import { Rubric } from "../rubric/Rubric";

export type Section = {
  createdAt: Date;
  criteria?: Array<Criterion>;
  id: string;
  name: string;
  rubric?: Rubric;
  updatedAt: Date;
};
