import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CriterionTitle } from "../criterion/CriterionTitle";
import { RubricTitle } from "../rubric/RubricTitle";

export const SectionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="criteria"
          reference="Criterion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CriterionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput source="rubric.id" reference="Rubric" label="Rubric">
          <SelectInput optionText={RubricTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
