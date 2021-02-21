import { AppTab } from '../../types/AppTab';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { adminAppTabs, appTabs } from '../../utils/constants';
import { Nullable } from '../../types/Nullable';

export const useAppTabs = (): AppTab[] => {
  const isAdmin = useSelector(
    (state: RootState) => state.authState.userInfo?.isAdmin
  );

  return isAdmin ? adminAppTabs : appTabs;
};

export const useAppTabByPath = (path: string): Nullable<AppTab> => {
  const availableTabs = useAppTabs();

  return availableTabs.find(tab => tab.path.toString().toLocaleLowerCase() === path.toLocaleLowerCase());
}
