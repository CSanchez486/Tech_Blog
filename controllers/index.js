// reference: https://expressjs.com/en/guide/routing.html
const express = require('express');
const router = express.Router();
const homeRoutes = require('./homeRoutes');
const api = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;