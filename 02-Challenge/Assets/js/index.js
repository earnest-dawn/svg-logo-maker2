const inquirer = require('inquirer');

function mainPrompts() {
    prompt([
        {
            name: 'text',
            type: 'input',
            message: 'logo text',
            validate: (text) =>
                text.length <= 3 || 'the message needs 3 letters',
        },
        {
            name: 'textColor',
            type: 'input',
            message: 'enter color information',
        },
        {
            name: 'shapeType',
            type: 'list',
            message: 'choose the shape of your logo',
            choices: ['Square', 'Triangle', 'Circle'],
        },
        {
            name: 'shapeColor',
            type: 'input',
            message: 'what is your shapes color',
        },
    ]);
    .then(({text, textColor, shapeType, shapeeColor}) => 
    {
        const shape;
        switch (shapeType) {
            case "Circle":
                shape= new Circle();
        }
    })
}
