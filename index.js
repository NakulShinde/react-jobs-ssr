const express = require('express')
const app = express()
const path = require('path');

const template = require('./build/template')
//SSR function import
const ssr = require('./build/server');
// our apps data model
const data = require('./public/data.json');

const PORT = process.env.PORT || 3000;

let initialState = {
    isFetching: false,
    apps: data
}

// Serving static files
app.use('/public', express.static(path.resolve(__dirname, 'public')));
app.use('/dist', express.static(path.resolve(__dirname, 'dist')));

// hide powered by express
app.disable('x-powered-by');

// server rendered home page
app.get('/', (req, res) => {
    const {content, styles} = ssr(req, initialState)
    const response = template("Server Rendered Page", "", content, styles)
    res.setHeader('Cache-Control', 'assets, max-age=604800')
    res.send(response);
});

// Pure client side rendered page
app.get('/client', (req, res) => {
    let response = template('Client Side Rendered page')
    res.setHeader('Cache-Control', 'assets, max-age=604800')
    res.send(response);
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
