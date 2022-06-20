import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { MarksBandTitle } from "../marksBand/MarksBandTitle";
import { SectionTitle } from "../section/SectionTitle";

export const CriterionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Advice" multiline source="advice" />
        <ReferenceInput
          source="marksband.id"
          reference="MarksBand"
          label="MarksBand"
        >
          <SelectInput optionText={MarksBandTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Order" source="order" />
        <ReferenceInput source="section.id" reference="Section" label="Section">
          <SelectInput optionText={SectionTitle} />
        </ReferenceInput>
        <TextInput label="Text" multiline source="text" />
      </SimpleForm>
    </Create>
  );
};
