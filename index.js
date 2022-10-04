var Cat = require('./Cat');
var Mouse = require('./mouse');

var cat = new Cat('Meo');
cat.sayHi();

var mouse = new Mouse('mouse');
cat.eat(mouse);
