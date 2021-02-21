import { UsersGroup } from '../../../../types/UsersGroup';
import { Nullable } from '../../../../types/Nullable';

export interface UsersGroupsListProps {
  usersGroups: UsersGroup[];
  selectedGroupId: Nullable<string>;
  onGroupSelected: (groupId: Nullable<string>) => void;
}
