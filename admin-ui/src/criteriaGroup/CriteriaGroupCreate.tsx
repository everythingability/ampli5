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

import { MarksBandTitle } from "../marksBand/MarksBandTitle";
import { RubricTitle } from "../rubric/RubricTitle";

export const CriteriaGroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="marksBands"
          reference="MarksBand"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MarksBandTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput source="rubric.id" reference="Rubric" label="Rubric">
          <SelectInput optionText={RubricTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
