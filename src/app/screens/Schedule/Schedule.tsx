import React from 'react';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { Paper } from '@material-ui/core';

export const appointmentsData = [
  {
    title: 'Crossfit',
    startDate: new Date(2020, 11, 10, 9, 30),
    endDate: new Date(2020, 11, 10, 11, 30),
  },
  {
    title: 'Crossfit',
    startDate: new Date(2020, 11, 12, 9, 30),
    endDate: new Date(2020, 11, 12, 11, 30),
  },
  {
    title: 'Crossfit',
    startDate: new Date(2020, 11, 14, 9, 30),
    endDate: new Date(2020, 11, 14, 11, 30),
  },
  {
    title: 'Crossfit',
    startDate: new Date(2020, 11, 16, 9, 30),
    endDate: new Date(2020, 11, 16, 11, 30),
  },
  {
    title: 'Crossfit',
    startDate: new Date(2020, 11, 18, 9, 30),
    endDate: new Date(2020, 11, 18, 11, 30),
  },
  {
    title: 'Crossfit',
    startDate: new Date(2020, 11, 20, 9, 30),
    endDate: new Date(2020, 11, 20, 11, 30),
  }
];

const Schedule = () => {
  return (
    <Paper style={{ maxWidth: '95%' }}>
      <Scheduler data={ appointmentsData }>
        <ViewState currentDate={new Date()}/>
        <MonthView/>
        <Appointments/>
      </Scheduler>
    </Paper>
  );
};

export default Schedule;
