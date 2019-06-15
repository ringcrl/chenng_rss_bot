const i18n = require('../i18n');
const logger = require('./logger');

class ControllableError extends Error {
    constructor(err) {
        super(err);
        if (err) {
            logger.error(err);
        }
    }

    toString() {
        return i18n[this.code];
    }
}

exports.newCtrlErr = function(code, e) {
    const err = new ControllableError(e);
    if (e.response) {
        switch (e.response.statusCode) {
            case 404:
            case 403:
                this.code = e.response.statusCode;
        }
    }
    err.code = code;
    return err;
};

exports.ControllableError = ControllableError;
