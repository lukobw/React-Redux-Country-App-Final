import React from 'react';
import {render} from 'react-dom';
import { Router, hashHistory } from 'react-router';
import {Provider} from 'react-redux';
import store from './store/store';
import routes from './routes';
import Style from '../src/country.css';
// import {getCountres} from './actions/actions-countries';

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);

// store.dispatch(getCountries());
// console.log(store.getState());