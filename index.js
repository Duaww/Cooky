const express = require('express');
const foodRouter = require('./router/foodRouter');
const userRouter = require('./router/userRouter');
const port = 3000;
const app = express();

app.use('/' , foodRouter);
app.get('/', foodRouter);
app.use('/', userRouter);

app.listen(port, function() {
    console.log('server started, port : ', +port);
})