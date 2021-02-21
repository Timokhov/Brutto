import { UsersGroup } from './UsersGroup';

export interface UserInfo {
  id: string,
  name: string,
  email: string,
  age: number,
  group?: UsersGroup,
  isAdmin?: boolean
}
