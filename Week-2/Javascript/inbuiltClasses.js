//Date class 

const date = new Date();

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getTime());
console.log(date.getMonth());

//Map Class : Same as map class in c++ stl: Key-Value pair

const map=new Map();
//Set function to insert key pair in the map
map.set("name","Deepak");
map.set("age",50);

//get function to retrieve the value of a key
const FirstName=map.get("name");
console.log(FirstName);