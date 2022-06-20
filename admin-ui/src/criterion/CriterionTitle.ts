import { Criterion as TCriterion } from "../api/criterion/Criterion";

export const CRITERION_TITLE_FIELD = "id";

export const CriterionTitle = (record: TCriterion): string => {
  return record.id || record.id;
};
