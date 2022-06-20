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

import { CRITERIAGROUP_TITLE_FIELD } from "./CriteriaGroupTitle";
import { RUBRIC_TITLE_FIELD } from "../rubric/RubricTitle";

export const CriteriaGroupShow = (props: ShowProps): React.ReactElement => {
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
          reference="MarksBand"
          target="CriteriaGroupId"
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
      </SimpleShowLayout>
    </Show>
  );
};
