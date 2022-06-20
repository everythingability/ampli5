import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MARKSBAND_TITLE_FIELD } from "../marksBand/MarksBandTitle";
import { SECTION_TITLE_FIELD } from "./SectionTitle";
import { RUBRIC_TITLE_FIELD } from "../rubric/RubricTitle";

export const SectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Rubric" source="rubric.id" reference="Rubric">
          <TextField source={RUBRIC_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Criterion"
          target="SectionId"
          label="Criteria"
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
            <ReferenceField
              label="Section"
              source="section.id"
              reference="Section"
            >
              <TextField source={SECTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Text" source="text" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
