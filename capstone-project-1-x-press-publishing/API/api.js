const express = require('express');

const apiRouter  = express.Router();
const artistsRouter = require('./artist.js');
const seriesRouter = require('./series.js');
//const issueRouter = require('./issue.js');


apiRouter.use('/series', seriesRouter);
apiRouter.use('/artists', artistsRouter);
//apiRouter.use('/issues', issueRouter);



module.exports = apiRouter;