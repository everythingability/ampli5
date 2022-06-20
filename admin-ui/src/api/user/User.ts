import { Rubric } from "../rubric/Rubric";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  rubrics?: Array<Rubric>;
  updatedAt: Date;
  username: string;
};
