var http = require('http')
var staticServer = require('ecstatic')({root: __dirname + '/public', handeError: false})

// Set up application data server
// TODO specify caching, if needed and use in dev mode
var server = http.createServer((req, res) => {
  staticServer(req, res)
  if (req.url === '/api') {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('This is API data')
  } else {
    staticServer(req, res)
  }
})

console.log('Server going')
server.listen(3000)
