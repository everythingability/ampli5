import { Rubric as TRubric } from "../api/rubric/Rubric";

export const RUBRIC_TITLE_FIELD = "id";

export const RubricTitle = (record: TRubric): string => {
  return record.id || record.id;
};
