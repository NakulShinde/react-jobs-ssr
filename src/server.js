import React from 'react'
import {renderToString} from 'react-dom/server'
import {ServerStyleSheet} from 'styled-components'

import App from './components/App'

module.exports = function render(initialState) {

    const sheet = new ServerStyleSheet()
    let content = renderToString(sheet.collectStyles(<App/>))
    const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
    return {content, styles};
}
