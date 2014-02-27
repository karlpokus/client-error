Client Error
============

Error class for Node servers

# Install

`npm install client-error`

# Use

```javascript
var ClientError = require('client-error');
throw new ClientError(); // -> 400 error / default message : Error 400 - Bad Request
throw new ClientError(401); // -> 400 error / default message : Error 401 - Unauthorized
throw new ClientError(403); // -> 403 error / default message : Error 403 - Forbidden
throw new ClientError(404); // -> 404 error / default message : Error 404 - Not Found
throw new ClientError('Boom !'); // -> 400 error / custom message : Error 400 - Bad Request : Boom !
throw new ClientError(403, 'No !'); // -> 403 error / custom message : Error 403 - Forbidden : No !
// Etc...
```

# Contribute

Feel free to add other 4xx error codes

# Licence

```
The MIT License (MIT)

Copyright (c) 2014 guillaumervls

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
