const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

router.get('/:id', function(req, res) {
  //note that we create path to file based on current working directory, not router file location.
  const fileStream = fs.createReadStream(path.join(process.cwd(), './assets/img/profilePic.jpg'));
  fileStream.pipe(res);
});

module.exports = router;
