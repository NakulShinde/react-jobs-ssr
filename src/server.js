import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'

import {ServerStyleSheet} from 'styled-components'

import App from './components/App'

module.exports = function render(req, initialState) {
    const context = {}
    const sheet = new ServerStyleSheet()
    let content = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )
    const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
    return {content, styles};
}
