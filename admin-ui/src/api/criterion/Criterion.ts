import { MarksBand } from "../marksBand/MarksBand";
import { Section } from "../section/Section";

export type Criterion = {
  advice: string | null;
  createdAt: Date;
  id: string;
  marksBand?: MarksBand;
  order: number;
  section?: Section;
  text: string;
  updatedAt: Date;
};
