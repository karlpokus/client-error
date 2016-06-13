var ClientError = module.exports = function ClientError(s, m) {  
  Error.captureStackTrace(this, ClientError);
  
  if (!s || !m) {
    this.status = 400;
    this.message = 'Bad Request';
  } else {
    this.status = s;
    this.message = m;
  }
};

ClientError.prototype = new Error();

ClientError.prototype.name = 'ClientError';