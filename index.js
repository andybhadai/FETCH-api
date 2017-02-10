const fetch = require('node-fetch');
fetch('http://swapi.co/api/people/1')
        .then((response) => response.json())
        .then(console.log);

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get Name(){
        return this.name;
    }

    get Age(){
        return this.age;
    }
}

let persons = [];
let printPerson = (person) => {return `This person is called ${person.Name} and his age is ${person.Age}`};

for(let i = 0; i < 10; i ++){
    persons.push(new Person(`Person ${i}`, `${i + 35}`));
}

persons.forEach((person) => console.log(printPerson(person)));
