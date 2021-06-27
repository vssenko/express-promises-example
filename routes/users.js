const express = require('express');
const router = express.Router();

const userService = require('../services/userService');

router.get('/', function(req, res) {
  res.promise(userService.getAll());
});

router.get('/errorRoute', function(req, res) {
  throw new Error('This is synchronous error!');
});

router.get('/:id', function(req, res) {
  res.promise(() => userService.getById(req.params.id));
});

router.get('/:id/profilePic', async function (req, res) {
  try{
    const url = await userService.getUserProfilePicUrl(req.params.id);
    res.redirect(url);
  } catch(e){
    res.promise(Promise.reject(e));
  }
});

module.exports = router;
