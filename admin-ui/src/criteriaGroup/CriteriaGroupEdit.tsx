import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MarksBandTitle } from "../marksBand/MarksBandTitle";
import { RubricTitle } from "../rubric/RubricTitle";

export const CriteriaGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
