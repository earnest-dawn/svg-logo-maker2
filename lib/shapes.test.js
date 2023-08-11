const { Shape, Circle, Square, Triangle } = require('./shapes');

describe('Shape classes', () => {
    describe('Circle', () => {
        const circle = new Circle();
        circle.setColor('blue');
        expect(circle.render()).toEqual(
            '<circle cx="150" cy="100" r="50" fill="blue" />'
        );
    });

    describe('Square', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toEqual(
            '<rect x="100" y="50" width="100" height="100" fill="green" />'
        );
    });

    describe('Triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('red');
        expect(triangle.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
        );
    });
});
