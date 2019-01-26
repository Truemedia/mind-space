// const fs = require('fs')
// const http = require('http')
//
// fs.readFile('./src/index.html', function (err, html) {
//     if (err) {
//         throw err;
//     }
//     http.createServer(function(request, response) {
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
//     }).listen(3000);
// });

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use( express.static('public') )
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname + '/src/index.html'))
)

app.listen(port, () => console.log(`Mindspace app listening on port ${port}!`))
