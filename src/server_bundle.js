import React from 'react'
import {hydrate} from 'react-dom'
import {BrowserRouter} from 'react-router-dom';

import App from './components/App'

/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

hydrate(
    <BrowserRouter>
    <App/>
</BrowserRouter>, document.querySelector('#app'))
