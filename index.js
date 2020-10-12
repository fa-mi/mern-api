const express = require('express');

const app = express();

app.use(() => {
    console.log('Hello Server')
    console.log('Hello Server2')
    console.log('Hello Server3')
    console.log('Hello Server4')
})

app.listen(4000);