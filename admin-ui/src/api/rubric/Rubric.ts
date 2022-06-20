import { CriteriaGroup } from "../criteriaGroup/CriteriaGroup";
import { MarksBand } from "../marksBand/MarksBand";
import { User } from "../user/User";
import { Section } from "../section/Section";

export type Rubric = {
  createdAt: Date;
  criteriaGroups?: Array<CriteriaGroup>;
  id: string;
  marksBands?: Array<MarksBand>;
  owner?: User;
  sections?: Array<Section>;
  updatedAt: Date;
};
