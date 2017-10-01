var person = new Object();
person["name"] = "Reed";
person["age"] = 26;
person["gender"] = "male";
person["fortune"] = "poor";
person["graduated"] = true;
person["height"] = 182;

person.address = new Object();
person.address.country = "Tainan";
person.address.road = "FuWha";
person.address.number = "12";


var heightProperty = "height";
console.log(person);
console.log(person[heightProperty]);
console.log(person.fortune);
console.log(person.address);

var annimal = {
	name : "puppy",
	age : 12,
	type : {
		"color" : "blue",
		"height" : 120,
		"weight" : 33
	},
	raice : "dog"
};
annimal.pet = {
	wanted : true,
	cool : false
};
console.log(annimal);

function greet(pp){
	console.log("Hello, " + pp.name);
}
greet(person);
greet({name: "Henry"});




console.log(JSON.stringify(person));//transfer JS object to JSON
var jsonValue = JSON.parse('{"name": "Billy", "Gender" : "Male"}');//transfer JSON to JS object
console.log(jsonValue);
console.log()


var english = {};
var spanish = {};
english.greeting = new Object();
english.greeting.commonGreet = "Hello";
english.greeting.specialGreet = "Hi guys~~";
spanish.greeting = new Object();
spanish.greeting.commonGreet = "Hola";
spanish.greeting.specialGreet = "Ksfmfiggg~~";


console.log(english.greeting.specialGreet);
console.log(spanish.greeting.specialGreet);


function greet(){
	console.log("I say hello~~");
}
greet.language = "English";
console.log(greet.language);

var myGreeting = function greet(){
	console.log("fxxk");
}
myGreeting();