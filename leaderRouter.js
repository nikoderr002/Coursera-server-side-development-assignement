const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')

    .all((req, res, next) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((rep, res, next) => {

        res.end('Will send all leaders to you!');
    })
    .post((req, res, next) => {

        res.end('Will add the leader : ' + req.body.name + ' with all details : ' + req.body.description);
    })
    .put((req, res, next) => {

        res.end(' PUT operation is not supported in this!');
    })

    .delete((req, res, next) => {

        res.end(' Deleting all leaders ');
    });


leaderRouter.route('/:leaderIds')

    .all((req, res, next) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res, next) => {
        res.end('Will send the details of the leader : ' + req.params.leaderIds + ' to you!');

    })



    .put((req, res, next) => {

        res.write(' Updating the leader : ' + req.params.leaderIds + '.\n');
        res.end('Will update the leader : ' + req.body.name + ' with details : ' + req.body.description);
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST method is not supported here!');
    })
    .delete((req, res, next) => {
        res.end('Deleting the leader : ' + req.params.leaderIds);
    });



module.exports = leaderRouter;
