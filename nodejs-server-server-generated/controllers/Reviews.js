'use strict';

var utils = require('../utils/writer.js');
var Reviews = require('../service/ReviewsService');

module.exports.shopsShopIdReviewsGET = function shopsShopIdReviewsGET (req, res, next, shopId, order) {
  Reviews.shopsShopIdReviewsGET(shopId, order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.shopsShopIdReviewsPOST = function shopsShopIdReviewsPOST (req, res, next, body, shopId) {
  Reviews.shopsShopIdReviewsPOST(body, shopId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
