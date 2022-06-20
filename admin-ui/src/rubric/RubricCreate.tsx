import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CriteriaGroupTitle } from "../criteriaGroup/CriteriaGroupTitle";
import { MarksBandTitle } from "../marksBand/MarksBandTitle";
import { UserTitle } from "../user/UserTitle";
import { SectionTitle } from "../section/SectionTitle";

export const RubricCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="criteriaGroups"
          reference="CriteriaGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CriteriaGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="marksBands"
          reference="MarksBand"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MarksBandTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="sections"
          reference="Section"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SectionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
