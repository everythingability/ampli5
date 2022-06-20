import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MARKSBAND_TITLE_FIELD } from "./MarksBandTitle";
import { SECTION_TITLE_FIELD } from "../section/SectionTitle";
import { CRITERIAGROUP_TITLE_FIELD } from "../criteriaGroup/CriteriaGroupTitle";
import { RUBRIC_TITLE_FIELD } from "../rubric/RubricTitle";

export const MarksBandShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bottom" source="bottom" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="CriteriaGroup"
          source="criteriagroup.id"
          reference="CriteriaGroup"
        >
          <TextField source={CRITERIAGROUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Rubric" source="rubric.id" reference="Rubric">
          <TextField source={RUBRIC_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Top" source="top" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Criterion"
          target="MarksBandId"
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
