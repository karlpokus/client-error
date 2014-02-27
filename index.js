var ClientError = module.exports = function ClientError(statusCode, message) {
  statusCode = statusCode || 400;
  Error.captureStackTrace(this, ClientError);
  if (typeof statusCode === 'number' || !statusCode) {
    this.statusCode = statusCode ||  400;
    this.message = ({
      '400': 'Bad Request',
      '401': 'Unauthorized',
      '403': 'Forbidden',
      '404': 'Not Found',
    }[statusCode.toString()] ||  'Client Error') + (message ? ' : ' + message : '');
  } else { // If just a message is passed.
    this.statusCode =  400;
    this.message = 'Bad Request : ' + statusCode;
  }
  this.message = 'Error ' + this.statusCode + ' - ' + this.message;
};
ClientError.prototype = new Error();
ClientError.prototype.name = 'ClientError';