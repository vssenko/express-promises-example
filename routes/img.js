const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

router.get('/:id', function(req, res) {
  /* Note that we create a path to the file based on the current working
   * directory, not the router file location.
   */
  const fileStream = fs.createReadStream(
    path.join(process.cwd(), './assets/img/profilePic.jpg')
  );
  fileStream.pipe(res);
});

module.exports = router;
