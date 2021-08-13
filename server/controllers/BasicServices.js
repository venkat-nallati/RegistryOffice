'use strict';

var utils = require('../utils/writer.js');
var BasicServices = require('../service/BasicServicesService');

module.exports.informAboutApplication = function informAboutApplication (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.informAboutApplication(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.informAboutApplicationInGenericRepresentation = function informAboutApplicationInGenericRepresentation (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.informAboutApplicationInGenericRepresentation(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.informAboutReleaseHistory = function informAboutReleaseHistory (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.informAboutReleaseHistory(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.informAboutReleaseHistoryInGenericRepresentation = function informAboutReleaseHistoryInGenericRepresentation (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.informAboutReleaseHistoryInGenericRepresentation(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notifyOamRequests = function notifyOamRequests (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.notifyOamRequests(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notifyServiceRequests = function notifyServiceRequests (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.notifyServiceRequests(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startApplicationInGenericRepresentation = function startApplicationInGenericRepresentation (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.startApplicationInGenericRepresentation(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stopNotifyingOamRequests = function stopNotifyingOamRequests (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.stopNotifyingOamRequests(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stopNotifyingServiceRequests = function stopNotifyingServiceRequests (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  BasicServices.stopNotifyingServiceRequests(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
