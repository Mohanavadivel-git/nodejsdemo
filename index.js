const express = require('express');
const app = express();
const port = 8080;

app.listen(port,()=>{
    console.log('listen to port 8080')
})

app.get('/helloworld', (req, res)=>{
    res.send('helloworld-green');
})
