import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AvailableUrls } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const RouteRedirect = () => {

  const history = useHistory();
  const isAuthenticated = useSelector(
    (state: RootState) => state.authState.userInfo !== null
  );

  useEffect(() => {
    if (isAuthenticated) {
      history.push(AvailableUrls.MY_TRAINING);
    } else {
      history.push(AvailableUrls.AUTHENTICATION);
    }
  }, []);

  return (
    <div>Loading...</div>
  );
}

export default RouteRedirect;
