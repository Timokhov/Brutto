import { useLocation } from 'react-router-dom';
import { useAppTabByPath } from '../../hooks/appTabs/hooks';

export const usePageTitle = () => {
  const location = useLocation();
  const activeTab = useAppTabByPath(location.pathname);
  return activeTab ? activeTab.title : ''
}
