//Factory method

var peopleFactory = function(name ,age ,state) {
    var tmp = {};
    tmp.age = age;
    tmp.name = name;
    tmp.state = state;
    tmp.printPerson = function(){
        console.log(this.name + ' '+ this.age + ' '+this.state);
    }
    return tmp;
};
var person1 = peopleFactory('rishabh' ,23 ,'u.p');
var person2 = peopleFactory('rajat' ,25 ,'u.p');

person1.printPerson();
person2.printPerson();

//Constructor-Pattern

var peopleConstructor = function(name ,age ,state) {
    this.name = name;
    this.age = age;
    this.state = state;

    this.printPerson = function(){
        console.log(this.name + ' '+ this.age + ' ' + this.state);
    }
};

var person1 = new peopleConstructor('rishabh' ,23 ,'up');
var person2 = new peopleConstructor('rajat' ,25 ,'up');

person1.printPerson();
person2.printPerson();


//Prototype Pattern

var peopleProto = function(){

};

peopleProto.prototype.age = 0;
peopleProto.prototype.name = 'no name';
peopleProto.prototype.city = 'no city';

peopleProto.prototype.printPerson = function(){
    console.log(this.age + ' '+this.name + ' ' + this.city);
}

var person1 = new peopleProto();
person1.name = 'john';
person1.age = 23;
person1.city = 'meerut';
person1.state = 'up';
console.dir(peopleProto);