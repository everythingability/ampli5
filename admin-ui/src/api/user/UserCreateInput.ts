import { RubricCreateNestedManyWithoutUsersInput } from "./RubricCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  rubrics?: RubricCreateNestedManyWithoutUsersInput;
  username: string;
};
