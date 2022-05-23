const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();


dishRouter.use(bodyParser.json());




dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();

    })

    .get((req, res, next) => {
        res.end('Will send all the dishes to you!');
    })

    .post((req, res, next) => {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Put operation not supported');
    })

    .delete((req, res, next) => {
        res.end('Deleting all dishes');
    });





dishRouter.route('/:dishIds')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })

    .get((req, res, next) => {
        res.end('Will send details of the dish: ' + req.params.dishIds + ' to you!');
    })

    .put((req, res, next) => {
        res.write('Updating the dish: ' + req.params.dishIds + '.\n');
        res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('Post method not supported');
    })

    .delete((req, res, next) => {
        res.end('Deleting dish: ' + req.params.dishIds);
    });



module.exports = dishRouter;
