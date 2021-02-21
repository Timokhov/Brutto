import { useLocation } from 'react-router-dom';
import { useAppTabByPath } from '../../hooks/appTabs/hooks';

export const useTabValue = (): string | boolean => {
  let tabValue: string | boolean = false;

  const location = useLocation();
  const activeTab = useAppTabByPath(location.pathname);

  if (activeTab) {
    tabValue = location.pathname
  }

  return tabValue;
}
