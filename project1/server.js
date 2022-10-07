const express = require('express');
const app = express();
const PORT = 3000;

const sanitize = text => text
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

app.use(express.static('public'));

app.post('/register', express.urlencoded({extended: false}), (req, res) => {
  const params = req.body;

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width"/>
      <title>Form sent via POST</title>
      <link rel="stylesheet" href="form-results.css" />
    </head>
    <body>
      Sent data via POST:
      <ul class="params">
      ${
        Object.keys(params).map( name => `
          <li><span class="name">${ sanitize(name) }</span>: <span class="value">${sanitize(params[name])}</span></li>
        `)
        .join('\n')
      }
      </ul>
      <a href="/">Return to site</a>
    </body>
    </html>
  `);
});


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
