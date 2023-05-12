let axios = require('axios');

async function getJSONAsync() {
    let json = await axios.get('http://jsonplaceholder.typicode.com/posts/3');
    return json.headers;
}

getJSONAsync().then(result => console.log(result));