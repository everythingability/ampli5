import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { CriterionTitle } from "../criterion/CriterionTitle";
import { CriteriaGroupTitle } from "../criteriaGroup/CriteriaGroupTitle";
import { RubricTitle } from "../rubric/RubricTitle";

export const MarksBandCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Bottom" source="bottom" />
        <ReferenceArrayInput
          source="criteria"
          reference="Criterion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CriterionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="criteriagroup.id"
          reference="CriteriaGroup"
          label="CriteriaGroup"
        >
          <SelectInput optionText={CriteriaGroupTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput source="rubric.id" reference="Rubric" label="Rubric">
          <SelectInput optionText={RubricTitle} />
        </ReferenceInput>
        <NumberInput label="Top" source="top" />
      </SimpleForm>
    </Create>
  );
};
