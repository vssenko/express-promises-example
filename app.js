const createError  = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const promiseMiddleware = require('./middlewares/promise');
const usersRouter = require('./routes/users');
//...
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(promiseMiddleware());
app.use('/users', usersRouter);
app.use(function(req, res, next) {
  res.promise(Promise.reject(createError(404)));
});
app.use(function(err, req, res, next) {
  res.promise(Promise.reject(err));
});

module.exports = app;
