import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { Error } from './components';
import { OHLC } from './domains/ohlc';
import { Routes, RoutesMatch } from './routes';


export const Main = () => {
    const { push: historyPush } = useHistory();

    return (
        <Switch>
            <Route path={RoutesMatch.home} exact component={OHLC.root} />
            <Route render={() => <Error.NotFound onRouteToHome={() => historyPush(Routes.home())} />} />
        </Switch>
    );
};
