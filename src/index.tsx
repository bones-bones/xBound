import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { css } from 'emotion';
import { Global } from '@emotion/react';
import { Provider } from 'react-redux';
import { store } from './store';
import Fipps from './fonts/Fipps-Regular.otf';

ReactDOM.render(
    <React.StrictMode>
        <Global
            styles={css`
                @font-face {
                    font-family: 'Fipps';
                    font-style: normal;
                    src: url('${Fipps}');
                }
            `}
        />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
