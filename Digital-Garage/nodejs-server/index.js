const http = require('http');
const port = 8080

const requestHandler = (req, res) => {
  console.log("request: ", req.url)
  res.write('<html>');
  res.write('<body>');
  res.write('<h1>Hello, World!</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log("Error: ", err)
  }

  console.log(`listening on port ${port}`)
})