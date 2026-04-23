const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const data = {
  "america": [
    "New York", "Los Angeles", "Chicago", "Houston", "Miami",
    "Toronto", "Mexico City", "São Paulo", "Buenos Aires", "Lima"
  ],
  "Asia": [
    "Tokyo", "Beijing", "Shanghai", "Mumbai", "Delhi",
    "Seoul", "Bangkok", "Singapore", "Jakarta", "Kuala Lumpur"
  ],
  "Europe": [
    "London", "Paris", "Berlin", "Madrid", "Rome",
    "Amsterdam", "Vienna", "Stockholm", "Warsaw", "Prague"
  ]
};

app.get('/api/continents', (req, res) => {
  res.json(data);
});

app.get('/', (req, res) => {
  const buildList = (name, cities) => {
    return `<section style="margin-bottom:1.25rem;">
      <h2 style="text-transform:capitalize;">${name}</h2>
      <ul>${cities.map(c => `<li>${c}</li>`).join('')}</ul>
    </section>`;
  };

  const html = `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Continents & Cities</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial; padding: 2rem; max-width:900px; margin:auto; }
        h1 { margin-bottom: 0.75rem; }
        section { border-bottom: 1px solid #eee; padding-bottom: 0.75rem; }
      </style>
    </head>
    <body>
      <h1>Continents & Cities</h1>
      <p>Three continents with 10 cities each. JSON API available at <code>/api/continents</code>.</p>
      ${Object.keys(data).map(k => buildList(k, data[k])).join('')}
      <footer style="margin-top:1.5rem;color:#666;font-size:.9rem;">Run locally with <code>npm start</code> or deploy to Azure Web App (Node).</footer>
    </body>
  </html>`;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});