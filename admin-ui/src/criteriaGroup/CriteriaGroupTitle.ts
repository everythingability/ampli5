import { CriteriaGroup as TCriteriaGroup } from "../api/criteriaGroup/CriteriaGroup";

export const CRITERIAGROUP_TITLE_FIELD = "name";

export const CriteriaGroupTitle = (record: TCriteriaGroup): string => {
  return record.name || record.id;
};
