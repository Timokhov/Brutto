import { AvailableUrls } from '../utils/constants';
import { ReactNode } from 'react';

export interface AppTab {
  path: AvailableUrls,
  title: string,
  shortTitle?: string,
  iconComponent?: ReactNode
}
