const express = require('express');
const router = express.Router();

const userService = require('../services/userService');

router.get('/', function(req, res) {
  res.promise(userService.getAll());
});

router.get('/:id', function(req, res) {
  res.promise(() => userService.getById(req.params.id));
});



module.exports = router;
