import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MARKSBAND_TITLE_FIELD } from "../marksBand/MarksBandTitle";
import { SECTION_TITLE_FIELD } from "../section/SectionTitle";

export const CriterionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
