import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AvailableUrls } from './utils/constants';
import RouteRedirect from './screens/RouteRedirect/RouteRedirect';
import AuthenticationPlaceholder from './screens/Authentication/placeholder/AutheticationPlaceholder';
import { Grid } from '@material-ui/core';
import { useAppStyles } from './App.styles';

const Authentication = React.lazy(() => {
    return import('./screens/Authentication/Authentication');
});

const App = () => {
    const classes = useAppStyles();
    return (
        <Grid container className={ classes.appGrid }  direction="column" justify="center" alignItems="center">
            <Grid item className={ classes.content }>
                <Switch>
                    <Route path={AvailableUrls.AUTHENTICATION} component={(props: any) => (
                        <React.Suspense fallback={<AuthenticationPlaceholder/>}>
                            <Authentication {...props}/>
                        </React.Suspense>
                    )}/>
                    <Route path="/" component={RouteRedirect}/>
                </Switch>
            </Grid>
        </Grid>
    );
}

export default App;
