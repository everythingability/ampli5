import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MARKSBAND_TITLE_FIELD } from "../marksBand/MarksBandTitle";
import { SECTION_TITLE_FIELD } from "../section/SectionTitle";

export const CriterionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Criteria"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Advice" source="advice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="MarksBand"
          source="marksband.id"
          reference="MarksBand"
        >
          <TextField source={MARKSBAND_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Order" source="order" />
        <ReferenceField label="Section" source="section.id" reference="Section">
          <TextField source={SECTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Text" source="text" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
