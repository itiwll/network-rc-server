var express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET users listing. */
router.get('/*', async function({ url, body, method }, res, next) {
  const { data } = await axios(`https://afdian.net${url}`, {
    method,
    body,
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
    }
  })
  res.send(data);
});

module.exports = router;

