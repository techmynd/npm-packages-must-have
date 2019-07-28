const request = require('request');

function getPosts() {
  const options = {
    uri: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
    headers: { 'user-agent': 'node.js', 'custom-header': 'my custom header' },
  };

  request(options, (err, response, body) => {
    if (err) {
      throw err;
    } else {
      console.log(JSON.parse(body));
    }
  });
}

getPosts();
