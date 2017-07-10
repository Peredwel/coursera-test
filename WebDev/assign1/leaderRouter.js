/**
 * Created by Carolyn on 2017-07-10.
 */
module.exports = function(callback) {
    try {
        var express = require('express');
        var bodyParser = require('body-parser');

        var leaderRouter = express.Router();

        leaderRouter.use(bodyParser.json());

        leaderRouter.route('/')
            .all(function (req, res, next) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                next();
            })

            .get(function (req, res, next) {
                res.end('Will send all the leaders to you!');
            })
            .post(function (req, res, next) {
                res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
            })

            .delete(function (req, res, next) {
                res.end('Deleting all leader');
            });

        leaderRouter.route('/:leaderId')

            .all(function (req, res, next) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                next();
            })

            .get(function (req, res, next) {
                res.end('Will send details of the dish: ' + req.params.leaderId + ' to you!');
            })

            .put(function (req, res, next) {
                res.write('Updating the dish: ' + req.params.leaderId + '\n');
                res.end('Will update the dish: ' + req.body.name +
                    ' with details: ' + req.body.description);
            })

            .delete(function (req, res, next) {
                res.end('Deleting dish: ' + req.params.dishId);
            });

        callback(null, dishRouter);
    }
    catch(error){
        callback(error, null);
    }
}



