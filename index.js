const express = require('express');
const path = require('path')
const router = require('./src/routes')
const dotenv = require('dotenv')

dotenv.config

const app = express();
const port = process.env.PORT || 3000;


app.use('/assets',express.static(path.join(__dirname,'public')) )

app.use(router)

app.listen(port, ()=> {
    console.log(`app is runing on port: ${port}`)
})
