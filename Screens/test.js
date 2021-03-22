var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://staging.webdesigntexas.us/whywaitfix-jp/wp-json/custom-plugin/logout',
  headers: { 
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zdGFnaW5nLndlYmRlc2lnbnRleGFzLnVzXC93aHl3YWl0Zml4LWpwIiwiaWF0IjoxNjE1NzgyMTMxLCJuYmYiOjE2MTU3ODIxMzEsImV4cCI6MTYxNjM4NjkzMSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMTAifX19.BTIENQsKiCoxA8UfjyEmNg7QwQkN2kLyATEgGRtMT9c', 
    'Cookie': 'wordpress_admin_logged_in=1'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});