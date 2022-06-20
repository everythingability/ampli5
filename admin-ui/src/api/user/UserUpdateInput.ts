import { RubricUpdateManyWithoutUsersInput } from "./RubricUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  rubrics?: RubricUpdateManyWithoutUsersInput;
  username?: string;
};
