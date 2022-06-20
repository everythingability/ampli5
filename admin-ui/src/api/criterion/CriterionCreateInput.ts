import { MarksBandWhereUniqueInput } from "../marksBand/MarksBandWhereUniqueInput";
import { SectionWhereUniqueInput } from "../section/SectionWhereUniqueInput";

export type CriterionCreateInput = {
  advice?: string | null;
  marksBand: MarksBandWhereUniqueInput;
  order: number;
  section: SectionWhereUniqueInput;
  text: string;
};
