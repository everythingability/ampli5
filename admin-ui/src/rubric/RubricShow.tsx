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

import { RUBRIC_TITLE_FIELD } from "./RubricTitle";
import { CRITERIAGROUP_TITLE_FIELD } from "../criteriaGroup/CriteriaGroupTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RubricShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Owner" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CriteriaGroup"
          target="RubricId"
          label="CriteriaGroups"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Rubric"
              source="rubric.id"
              reference="Rubric"
            >
              <TextField source={RUBRIC_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MarksBand"
          target="RubricId"
          label="MarksBands"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Rubric"
              source="rubric.id"
              reference="Rubric"
            >
              <TextField source={RUBRIC_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Top" source="top" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Section"
          target="RubricId"
          label="Sections"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField
              label="Rubric"
              source="rubric.id"
              reference="Rubric"
            >
              <TextField source={RUBRIC_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
