var http = require('http');

exports.get = function(url, callback){
  http.get(url, (res) => {
    let body = '';
    res.on('data', (chunk) => {
      body += chunk;
    })
    res.on('end', () => {
      console.log(body);
      callback(body);
    })
  });
}

exports.post = function(url, data, callback){
  data = JSON.stringify(data);
  const options = {
    path: url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
      console.log('No more data in response.');
      // why does this go here?
      if(callback) {
        callback();
      }
    });
  });

  req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
  });

  // write data to request body
  req.write(data);
  req.end();
}