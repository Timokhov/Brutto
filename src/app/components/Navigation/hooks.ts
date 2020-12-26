import { useLocation } from 'react-router-dom';
import { AvailableUrls } from '../../utils/constants';

export const useTabValue = (): string | boolean => {
  const location = useLocation();
  const availableTabs = [
    AvailableUrls.MY_TRAINING.toString(),
    AvailableUrls.SCHEDULE.toString(),
    AvailableUrls.PERSONAL_RECORDS.toString()
  ];
  let tabValue: string | boolean = false;
  if (availableTabs.includes(location.pathname)) {
    tabValue = location.pathname
  }

  return tabValue;
}
