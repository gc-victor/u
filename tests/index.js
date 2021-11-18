// Mocks
global['queueMicrotask'] = (cb) => cb();
global['NodeFilter'] = { SHOW_ELEMENT: 1 };

require = require('esm')(module /*, options*/);
module.exports = require('./tests.js');
