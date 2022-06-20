import { MarksBand as TMarksBand } from "../api/marksBand/MarksBand";

export const MARKSBAND_TITLE_FIELD = "name";

export const MarksBandTitle = (record: TMarksBand): string => {
  return record.name || record.id;
};
