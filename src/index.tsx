import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import 'fontsource-roboto';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
import teal from '@material-ui/core/colors/teal';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[600],
        },
        secondary: {
            main: teal[300],
            contrastText: '#fff'
        }
    },
});

const app = (
    <React.StrictMode>
        <ThemeProvider theme={ theme }>
            <BrowserRouter>
                <CssBaseline/>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
