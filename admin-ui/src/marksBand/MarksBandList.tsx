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
import { CRITERIAGROUP_TITLE_FIELD } from "../criteriaGroup/CriteriaGroupTitle";
import { RUBRIC_TITLE_FIELD } from "../rubric/RubricTitle";

export const MarksBandList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MarksBands"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Rubric" source="rubric.id" reference="Rubric">
          <TextField source={RUBRIC_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Top" source="top" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
