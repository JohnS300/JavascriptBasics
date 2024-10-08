//JavaScript Classes are templates for JavaScript Objects.

class Person {

    constructor(name,age,city = 'London', ...ethnicities){
        this.name = name;
        this.age = age;
        this.city = city;
        this.ethnicities = ethnicities.length > 0 ? ethnicities : ['English'];

    }


    getdetails(){
        return `Details provided:\nName : ${this.name},\nAge : ${this.age},\nCity of residence : ${this.city},\nEthnicities : ${this.ethnicities.join(', ')}`;
    };
};

module.export = Person;