var test = require('tape'),
    Knas = require('../index.js');

test('no args', function(t) {
  var err = new Knas();
  
  t.equal(typeof err, 'object', 'is object');
  t.equal(err instanceof Error, true, 'is Error');
  t.equal(typeof err.stack, 'string', '.stack');
  t.equal(err.status, 400, '.status');
  t.equal(err.message, 'Bad Request', '.message');
  t.equal(err.name, 'ClientError', '.name');
  t.end();
});

test('with args', function(t) {
  var err = new Knas(401, 'Invalid input');
  
  t.equal(typeof err, 'object', 'is object');
  t.equal(err instanceof Error, true, 'is Error');
  t.equal(typeof err.stack, 'string', '.stack');
  t.equal(err.status, 401, '.status');
  t.equal(err.message, 'Invalid input', '.message');  
  t.equal(err.name, 'ClientError', '.name');
  t.end();
});
