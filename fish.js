function Fish(){
    this.stomach = [];
}

Fish.prototype.eat = function(cat){
    this.stomach.push(cat);
}