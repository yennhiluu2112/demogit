var chalk = require('chalk');
function Cat(name){
    this.stomach = [];
    this.name = name;

}
Cat.prototype.eat = function (mouse){
    this.stomach.push(mouse);
};

Cat.prototype.sayHi = function (){
    console.log('Hello' + chalk.blue(this.name));
};
//thu vien chalk de cho chữ màu 

module.exports = Cat;