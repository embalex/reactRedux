import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { createBrowserHistory } from 'history';

import { Layout } from './components';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { theme } from './theme';


const history = createBrowserHistory();
const App: React.FC = () => (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
            <Layout.Main
                header={<Header />}
                body={<Main />}
                footer={<Footer />}
            />
        </Router>
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('reactRedux'));
