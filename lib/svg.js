// const fs = require('fs');
import fs from 'fs';
function svg(content) {
    fs.writeFile('logo.svg', content, function (err) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Generated logo.svg');
    });
}

module.exports = svg;
