import React from 'react';
import { AppTab } from '../types/AppTab';
import EventNoteIcon from '@material-ui/icons/EventNote';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FlagIcon from '@material-ui/icons/Flag';

export enum AvailableUrls {
  DEFAULT = '/',
  AUTHENTICATION = '/auth',
  MY_TRAINING = '/my-training',
  SCHEDULE = '/schedule',
  PERSONAL_RECORDS = '/personal-records',
  USERS = '/users',
  MOVEMENTS = '/movements',
  WORKOUTS_PLAN = '/workouts-plan',
}

export const appTabs: AppTab[] = [
  {
    path: AvailableUrls.MY_TRAINING,
    title: 'My Training',
    iconComponent: <FitnessCenterIcon/>
  },
  {
    path: AvailableUrls.SCHEDULE,
    title: 'Schedule',
    iconComponent: <EventNoteIcon/>
  },
  {
    path: AvailableUrls.PERSONAL_RECORDS,
    title: 'Personal Records',
    shortTitle: 'Records',
    iconComponent: <FlagIcon/>
  }
];

export const adminAppTabs: AppTab[] = [
  {
    path: AvailableUrls.USERS,
    title: 'Users'
  },
  {
    path: AvailableUrls.MOVEMENTS,
    title: 'Movements'
  },
  {
    path: AvailableUrls.WORKOUTS_PLAN,
    title: 'Workouts Plan'
  }
];
