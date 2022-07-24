const fs = require('fs').promises;

setInterval(() => {
    fs.unlink('./ajsdkfl.js');
}, 1000);