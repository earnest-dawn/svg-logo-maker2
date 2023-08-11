// const { Circle, Square, Triangle } = require('./lib/shapes');
// const prompt = require('./lib/prompts');
// const svg = require('./lib/svg');

import { Circle, Square, Triangle } from './lib/shapes.js';
import svg from './lib/svg.js';
import prompt from './lib/prompts.js';

prompt()
    .then((answers) => {
        let shape;
        let { text, textColor, shape: shapeType, shapeColor } = answers;

        if (shapeType === 'Circle') {
            shape = new Circle(shapeColor);
        } else if (shapeType === 'Square') {
            shape = new Square(shapeColor);
        } else if (shapeType === 'Triangle') {
            shape = new Triangle(shapeColor);
        }

        let svgString = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  ${shape.render()}
  <text x="150" y="110" align="middle" text-anchor="middle" font-size="30" fill="${textColor}">${text}</text>
</svg>`;

        svg(svgString);
    })
    .catch((error) => {
        console.error(error);
    });
