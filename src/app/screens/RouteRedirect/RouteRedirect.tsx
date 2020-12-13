import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AvailableUrls } from '../../utils/constants';

const RouteRedirect = (props: RouteComponentProps) => {

    useEffect( () => {
        setTimeout(() => {
            props.history.push(AvailableUrls.AUTHENTICATION)
        }, 1500)
    });

    return (
        <div>Loading...</div>
    );
}

export default RouteRedirect;
