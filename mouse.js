function mouse(name){
    this.name = name;
    this.dead = false;
}
mouse.prototype.die = function(){
    this.dead = true;
}
horse.prototype.run = function(){}
horse.prototype.sleep = function(){
}
module.exports = mouse;