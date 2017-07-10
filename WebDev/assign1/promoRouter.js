/**
 * Created by Carolyn on 2017-07-10.
 */
module.exports = function(callback) {
    try {
        var express = require('express');
        var bodyParser = require('body-parser');

        var promoRouter = express.Router();

        promoRouter.use(bodyParser.json());

        promoRouter.route('/')
            .all(function (req, res, next) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                next();
            })

            .get(function (req, res, next) {
                res.end('Will send all the promos to you!');
            })
            .post(function (req, res, next) {
                res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
            })

            .delete(function (req, res, next) {
                res.end('Deleting all dishes');
            });

        dishRouter.route('/:promoId')

            .all(function (req, res, next) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                next();
            })

            .get(function (req, res, next) {
                res.end('Will send details of the dish: ' + req.params.promoId + ' to you!');
            })

            .put(function (req, res, next) {
                res.write('Updating the dish: ' + req.params.promoId + '\n');
                res.end('Will update the dish: ' + req.body.name +
                    ' with details: ' + req.body.description);
            })

            .delete(function (req, res, next) {
                res.end('Deleting dish: ' + req.params.promoId);
            });

        callback(null, promoRouter);
    }
    catch(error){
        callback(error, null);
    }
}




