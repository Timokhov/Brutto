import { useLocation } from 'react-router-dom';
import { AvailableUrls } from '../../utils/constants';

export const usePageTitle = () => {
  const location = useLocation();

  switch (location.pathname) {
    case AvailableUrls.MY_TRAINING: return 'My Training'
    case AvailableUrls.SCHEDULE: return 'Schedule'
    case AvailableUrls.PERSONAL_RECORDS: return 'Records'
    default: return ''
  }
}
