// html skeleton provider
function template(title, initialState = {}, content = "", styles = "") {
    let scripts = ''; // Dynamically ship scripts based on render type
    if (content) {
        scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="dist/server_bundle.js"></script>
                `
    } else {
        scripts = ` <script src="dist/client_bundle.js"> </script> `
    }
    let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
				<title> ${title} </title>
				<style type="text/css">
				body, html {
					margin: 0;
                    padding: 0;
                    border: 0;
                    font: inherit;
                    vertical-align: baseline;
                }
                *,
                *:before,
                *:after {
                  -webkit-box-sizing: border-box;
                  -ms-box-sizing: border-box;
                  -moz-box-sizing: border-box;
                  box-sizing: border-box; }
                
                html {
                  font-size: 16px;
                  -webkit-font-smoothing: antialiased; }
                
                body {
                  font-family: "San Fransisco", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvatica Neue", Helvatica, sans-serif;
                  font-size: 1rem;
                  line-height: 1.65;
                  color: #333; }
                
                </style>
                ${styles}
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- magic happens here -->  ${content}
                   </div>
                </div>
                  ${scripts}
              </body>
              `;

    return page;
}

module.exports = template;
