import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AvailableUrls } from './utils/constants';
import RouteRedirect from './screens/RouteRedirect/RouteRedirect';
import AuthenticationPlaceholder from './screens/Authentication/placeholder/AutheticationPlaceholder';
import { useAppStyles } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import MyTrainingPlaceholder from './screens/MyTraining/placeholder/MyTrainingPlaceholder';
import Header from './components/Header/Header';
import SchedulePlaceholder from './screens/Schedule/placeholder/SchedulePlaceholder';
import PersonalRecordsPlaceholder from './screens/PersonalRecords/placeholder/PersonalRecordsPlaceholder';
import BottomNav from './components/Navigation/BottomNav/BottomNav';
import { useIsMobile } from './hooks/mobile/hooks';
import { useHistory } from 'react-router-dom';
import * as HistoryService from './services/history/history.service';
import UsersPlaceholder from './screens/Users/placeholder/UsersPlaceholder';

const Authentication = React.lazy(() => {
  return import('./screens/Authentication/Authentication');
});

const MyTraining = React.lazy(() => {
  return import('./screens/MyTraining/MyTraining');
});

const Schedule = React.lazy(() => {
  return import('./screens/Schedule/Schedule');
});

const PersonalRecords = React.lazy(() => {
  return import('./screens/PersonalRecords/PersonalRecords');
});

const Users = React.lazy(() => {
  return import('./screens/Users/Users');
});

const App = () => {
  const classes = useAppStyles();

  const isAuthenticated = useSelector(
    (state: RootState) => state.authState.userInfo !== null
  );
  const isAdmin = useSelector(
    (state: RootState) => state.authState.userInfo?.isAdmin
  );
  const isMobile = useIsMobile();
  const history = useHistory()

  useEffect(() => {
    HistoryService.init(history);
  }, [history]);

  const appRoutes = (
    <>
      <Route path={AvailableUrls.MY_TRAINING} render={(props: any) => (
        <React.Suspense fallback={<MyTrainingPlaceholder/>}>
          <MyTraining {...props}/>
        </React.Suspense>
      )}/>
      <Route path={AvailableUrls.SCHEDULE} render={(props: any) => (
        <React.Suspense fallback={<SchedulePlaceholder/>}>
          <Schedule {...props}/>
        </React.Suspense>
      )}/>
      <Route path={AvailableUrls.PERSONAL_RECORDS} render={(props: any) => (
        <React.Suspense fallback={<PersonalRecordsPlaceholder/>}>
          <PersonalRecords {...props}/>
        </React.Suspense>
      )}/>
    </>
  );

  const adminRoutes = (
    <>
      <Route path={AvailableUrls.USERS} render={(props: any) => (
        <React.Suspense fallback={<UsersPlaceholder/>}>
          <Users {...props}/>
        </React.Suspense>
      )}/>
    </>
  );

  return (
    <div className={classes.appContainer}>
      {
        isAuthenticated && <Header/>
      }
      <div className={classes.content}>
        <Switch>
          {
            !isAuthenticated &&
            <Route path={AvailableUrls.AUTHENTICATION} render={(props: any) => (
              <React.Suspense fallback={<AuthenticationPlaceholder/>}>
                <Authentication {...props}/>
              </React.Suspense>
            )}/>
          }
          {
            isAuthenticated && (isAdmin ? adminRoutes : appRoutes)
          }
          <Route path={AvailableUrls.DEFAULT} component={RouteRedirect}/>
        </Switch>
      </div>
      {
        isAuthenticated && isMobile && <BottomNav/>
      }
    </div>
  );
}

export default App;
