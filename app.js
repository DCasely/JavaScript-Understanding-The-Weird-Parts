// ====================================================
// THE GLOBAL ENVIRONMENT AND THE GLOBAL OBJECT
// ====================================================

// var a = 'Hello World!';

// function b() {}

// ====================================================
// THG EXECUTION CONTEXT: CREATION AND 'HOISTING'
// ====================================================

// var a = 'Hello World';

// function b() {
//   console.log('Called b!');
// }

// b();
// console.log(a);

// ====================================================
// CONCEPTUAL ASIDE: JAVASCRIPT AND 'UNDEFINED'
// ====================================================

// var a = 'Hello World';
// var a;
// console.log(a);

// if (a === undefined) {
//   console.log('a is undefined!');
// } else {
//   console.log('a is defined!');
// }

// ====================================================
// THE EXECUTION CONTEXT: CODE EXECUTION
// ====================================================

// function b() {
//   console.log('Called b!');
// }

// b();

// console.log(a);

// var a = 'Hello World';

// console.log(a);

// ==========================================================
// FUNCTION INVOCATION AND THE EXECUTION STACK
// ==========================================================

// function b() {
//   console.log('step 2');
// }

// function a() {
//   console.log('step 1');
//   b();
//   console.log('step 3');
// }

// a();
// console.log('step 4');

// function a() {
//   b();
//   var c;
// }

// function b() {
//   var d;
// }

// a();
// var d;

// ==========================================================
// FUNCTIONS, CONTEXT, AND VARIABLE ENVIRONMENTS
// ==========================================================

// function b() {
//   var myVar;
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   console.log(myVar);
//   b();
// }

// var myVar = 1;
// console.log(myVar);
// a();

// ==========================================================
// THE SCOPE CHAIN
// ==========================================================

// function b() {
//   //   myVar = 3;
//   c();

//   function c() {
//     console.log(myVar);
//   }
// }

// function a() {
//   var myVar = 2;
//   b();
// }

// var myVar = 1;
// a();

// function a() {
//   function b() {
//     console.log(myVar);
//   }

//   //   var myVar = 2;
//   b();
// }

// var myVar = 1;
// a();

// ==========================================================
// SCOPE, ES6, AND LET
// ==========================================================

// a = 3;
// b = 2;

// if (a > b) {
//   console.log(c);
//   let c = true;
// }

// ==========================================================
// WHAT ABOUT ASYNCHRONOUS CALLBACKS?
// ==========================================================

// ASYNCHRONOUS: MORE THAN ONE AT AT TIME

// // long running function
// function waitThreeSeconds() {
//   var ms = 3000 + new Date().getTime();
//   while (new Date() < ms) {}
//   console.log('finished function');
// }

// function clickHandler() {
//   console.log('click event!');
// }

// // listen for the click event

// document.addEventListener('click', clickHandler);

// waitThreeSeconds();
// console.log('finished execution');

// ==========================================================
// CONCEPTUAL ASIDE: TYPES AND JAVASCRIPT
// ==========================================================

// DYNAMIC TYPING: YOU DON'T TELL THE ENGINE WHAT TYPE OF DATA A VARIABLE HOLDS, IT FIGURES IT OUT WHILE YOUR CODE IS RUNNING.

// STATIC TYPING
// bool isNew = 'hello'; ***Java***

// DYNAMIC TYPING
// var isNew = true;
// isNew = 'Yup';
// isNew = 1;

// ==========================================================
// PRIMITIVE TYPES
// ==========================================================

// PRIMITIVE TYPE: A TYPE OF DATA THAT REPRESENTS A SINGLE VALUE

// 1. "UNDEFINED" - REPRESENTS LACK OF EXISTENCE
// 2. "NULL" - REPRESENTS LACK OF EXISTENCE OR NO VALUE
// 3. "BOOLEAN" - TRUE OR FALSE
// 4. "NUMBER" - FLOATING POINT NUMBER (THERE'S ALWAYS SOME DECIMALS).
// 5. "STRING" - A SEQUENCE OF CHARACTERS (BOTH '' AND "" CAN BE USED)
// 6. "SYMBOL" - USED IN ES6...

// ==========================================================
// CONCEPTUAL ASIDE: OPERATORS
// ==========================================================

// OPERATOR: A SPECIAL FUNCTION THAT IS SYNTACTICALLY (WRITTEN) DIFFERENTLY

// var a = 4 > 3;
// console.log(a);

// ==========================================================
// OPERATOR PRECEDENCE AND ASSOCIATIVITY
// ==========================================================

// OPERATOR PRECEDENCE: WHICH OPERATOR FUNCTION GETS CALLED FIRST

// OPERATOR ASSOCIATIVITY: WHAT ORDER OPERATOR FUNCTIONS GET CALLED IN: LEFT-TO-RIGHT OR RIGHT-TO-LEFT

// var a = 2,
//   b = 3,
//   c = 4;

// a = b = c;
// console.log(a);
// console.log(b);
// console.log(c);

// var a = (3 + 4) * 5;

// console.log(a);

// ==========================================================
// CONCEPTUAL ASIDE: COERCION
// ==========================================================

// var a = 1,
//   b = '2';

// console.log(a + b);

// ==========================================================
// COMPARISON OPERATORS
// ==========================================================

// console.log(1 < 2 < 3);

// let x = Number(null);

// console.log(x);

// 3 == '3' true;
// 3 === '3' false;

// var a = 0;
// var b = false;

// if (a === b) {
//   console.log('They are equal!');
// } else {
//   console.log('Not Equal');
// }

// ==========================================================
// EXISTENCE AND BOOLEANS
// ==========================================================

// var a;

// a = null;
// a = '';
// a = ' ';
// a = 0;

// if (a || a === 0) {
//   console.log('I AM DEFINED');
// } else {
//   console.log('I AM UNDEFINED');
// }

// ==========================================================
// DEFAULT VALUES
// ==========================================================

// function greet(name) {
//   name = name || '<Your name here>';
//   console.log(`Hello ${name}`);
// }

// greet();
// greet('DAVIN');

// ==========================================================
// FRAMEWORK ASIDE
// ==========================================================

// console.log(libraryName);

// ==========================================================
// OBJECTS AND FUNCTIONS
// ==========================================================

// var person = new Object();

// person['firstname'] = 'Davin';
// person['lastname'] = 'Casely';

// var firstNameProperty = 'firstname';

// console.log(person);
// console.log(person[firstNameProperty]);

// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = '100 Main St';
// person.address.city = 'Miami';
// person.address.state = 'Florida';

// console.log(person.address);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person['address']['state']);

// ==========================================================
// OBJECTS AND OBJECT LITERALS
// ==========================================================

// var Davin = {
//   firstname: 'Davin',
//   lastname: 'Casely',

//   address: {
//     street: '100 Main St.',
//     city: 'Miami',
//     state: 'FL',
//   },
// };

// function greet(person) {
//   console.log(`Hi ${person.firstname} ${person.lastname}`);
// }

// greet(Davin);

// greet({
//   firstname: 'Mary',
//   lastname: 'Doe',
// });

// Davin.address2 = {
//   street: '300 Main Ave',
//   city: 'Miami Beach',
//   state: 'FL',
// };

// console.log(Davin.address2);

// ==========================================================
// FRAMEWORK ASIDE: FAKING NAMESPACES
// ==========================================================

// // NAMESPACE: A CONTAINER FOR VARIABLES AND FUNCTIONS

// var greet = 'Hello!';
// var greet = 'Hola!';

// // console.log(greet);

// var english = {
//   greetings: {
//     basic: 'Hello',
//   },
// };

// var spanish = {
//   greetings: {
//     basic: 'Hola',
//   },
// };

// console.log(english.greetings.basic);
// console.log(spanish.greetings.basic);

// ==========================================================
// JSON AND OBJECT LITERALS
// ==========================================================

// var objectLiteral = {
//   firstname: 'Mary',
//   isAProgrammer: true,
// };

// console.log(JSON.stringify(objectLiteral));

// // JSON PROPERTIES MUST BE WRAPPED IN QUOTES
// var jsonValue = JSON.parse('{ "firstname": "Mary",
//     "isAProgrammer": true }');

// console.log(jsonValue);

// ==========================================================
// FUNCTIONS AND OBJECTS
// ==========================================================

// FIRST CLASS FUNCTIONS: EVERYTHING YOU CAN DO WITH OTHER TYPES YOU CAN DO WITH FUNCTIONS.

// function greet() {
//   console.log('Hi');
// }

// // You can attach a property to a function just like a regular object because functions are objects!
// greet.language = 'english';

// greet();
// console.log(greet.language);

// ==========================================================
// FUNCTION STATEMENTS AND FUNCTION EXPRESSIONS
// ==========================================================

// EXPRESSION: A UNIT OF CODE THAT RESULTS IN A VALUE

// greet();

// function greet() {
//   console.log('hi');
// }

// // anonymousGreet(); Uncaught Error: undefined is not a function.

// var anonymousGreet = () => {
//   console.log('hi');
// };

// anonymousGreet();

// function log(a) {
//   a();
// }

// log(() => {
//   console.log('hi');
// });

// ==========================================================
// CONCEPTUAL ASIDE: BY VALUE VS BY REFERENCE
// ==========================================================

// // by value (primitives)
// var a = 3;
// var b;

// b = a;
// a = 2;

// console.log(a);
// console.log(b);

// // by reference (all objects (including functions))
// var c = {
//   greeting: 'hi',
// };

// var d;

// d = c;
// c.greeting = 'hello';

// console.log(c);
// console.log(d);

// // by reference (even as parameters)
// function changeGreeting(obj) {
//   obj.greeting = 'Hola';
// }

// changeGreeting(d);
// console.log(c);
// console.log(d);

// // equals operator sets up new memory space (new address)
// c = { greeting: 'howdy' };
// console.log(c);
// console.log(d);

// ==========================================================
// OBJECTS, FUNCTIONS, AND 'this'
// ==========================================================

// console.log(this);

// function a() {
//   console.log(this);
//   this.newvariable = 'Hello';
// }

// var b = () => {
//   console.log(this);
// };

// a();
// console.log(newvariable);
// b();

// var c = {
//   name: 'The c object',
//   log: function () {
//     var self = this;

//     this.name = 'updated c Object';
//     console.log(self);

//     var setname = function (newname) {
//       self.name = newname;
//     };

//     setname('Updated again! The c object');
//     console.log(self);
//   },

//   log2: () => {
//     console.log(this);
//   },
// };

// c.log();
// c.log2();

// console.log(name);

// ==========================================================
// CONCEPTUAL ASIDE: ARRAYS - COLLECTIONS OF ANYTHING
// ==========================================================

// // var arr = new Array();
// var arr = [
//   1,
//   false,
//   {
//     name: 'Davin',
//     address: '1000 Main St',
//   },
//   function (name) {
//     var greeting = 'Hello';
//     console.log(`${greeting} ${name}`);
//   },
//   'hello',
// ];

// console.log(arr);

// arr[3](arr[2].name);

// ==========================================================
// ARGUMENTS AND SPREAD
// ==========================================================

// ARGUMENTS: THE PARAMETERS YOU PASS TO A FUNCTION

// function greet(firstname, lastname, language, ...other) {
//   //   firstname = firstname || 'Davin';
//   //   lastname = lastname || 'Casely';
//   //   language = language || 'en';

//   if (arguments.length === 0) {
//     console.log('Missing Parameters');
//     console.log('--------------------');
//   }

//   console.log(firstname);
//   console.log(lastname);
//   console.log(language);
//   console.log('arg[0]: ' + arguments[0]);
//   console.log('==============');
// }

// greet();
// greet('John');
// greet('John', 'Sally');
// greet('John', 'Sally', 'Mike', '111 main st', 'new york');

// ==========================================================
// FRAMEWORK ASIDE FUNCTION OVERLOADING
// ==========================================================

// function greet(firstname, lastname, language = 'en') {
//   if (language === 'en') {
//     console.log(`Hello ${firstname} ${lastname}`);
//   }

//   if (language === 'es') {
//     console.log(`Hola ${firstname} ${lastname}`);
//   }
// }

// function greetEnglish(firstname, lastname) {
//   greet(firstname, lastname, 'en');
// }

// function greetSpanish(firstname, lastname) {
//   greet(firstname, lastname, 'es');
// }

// greetEnglish('John', 'Doe');
// greetSpanish('John', 'Doe');

// ==========================================================
// CONCEPTUAL ASIDE: SYNTAX PARSERS
// ==========================================================

// ==========================================================
// DANGEROUS ASIDE: AUTOMATIC SEMICOLON INSERTION
// ==========================================================

// function getPerson() {
//   return {
//     name: 'Davin',
//   };
// }

// console.log(getPerson());

// =================================================================================
// WHITESPACE: INVISIBLE CHARACTERS THAT CREATE LITERAL 'SPACE' IN YOUR WRITTEN CODE
// =================================================================================

// var // name of the person
//   firstname,
//   // last name of the person
//   lastname,
//   // the language
//   // can be 'en' or 'es'
//   language;

// var person = {
//   //the first name
//   firstname: 'John',
//   // the last name
//   // (always required)
//   lastname: 'Doe',
// };

// console.log(person);

// =================================================================================
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)S
// =================================================================================

// // function statement
// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// greet('Davin');

// // function expression
// var greetFunc = (name) => {
//   console.log(`Hello ${name}`);
// };

// greetFunc('John');

// // using ann Immediately Invoked Function Expression (IIFE)
// var greeting = (function (name = 'Casely') {
//   return `Hello ${name}`;
// })('David');

// console.log(greeting);

// ('I am a string');
// 3;
// {
//   name: 'Dave';
// }

// var firstname = 'Jack';

// (function (name) {
//   var greeting = 'Hello';
//   console.log(`${greeting} ${name}`);
// })(firstname); // IIFE

// (name) => {
//   return `Hello ${name}`;
// };

// =================================================================================
// FRAMEWORK ASIDE: IIFES AND SAFE CODE
// =================================================================================

// // IIFE
// (function (global, name) {
//   var greeting = 'Hello';
//   global.greeting = 'Hello';

//   console.log(`${greeting} ${name}`);
// })(window, 'Davin'); // IIFE

// console.log(greeting);

// =================================================================================
// UNDERSTANDING CLOSURES
// =================================================================================

// function greet(whattosay) {
//   return function (name) {
//     console.log(`${whattosay} ${name}`);
//   };
// }

// var sayHi = greet('Hi');
// sayHi('Davin');

// =================================================================================
// UNDERSTANDING CLOSURES PART 2
// =================================================================================

// function buildFunctions() {
//   var arr = [];

//   for (var i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }

//   return arr;
// }

// var fs = buildFunctions();
// fs[0]();
// fs[1]();
// fs[2]();

// function buildFunctions2() {
//   var arr = [];

//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       (function (j) {
//         return function () {
//           console.log(j);
//         };
//       })(i)
//     );
//   }

//   return arr;
// }

// var fs2 = buildFunctions2();
// fs2[0]();
// fs2[1]();
// fs2[2]();

// =================================================================================
// FRAMEWORK ASIDE: FUNCTION FACTORIES
// =================================================================================

// function makeGreeting(language) {
//   return function (firstname, lastname) {
//     if (language === 'en') {
//       console.log(`Hello ${firstname} ${lastname}`);
//     }

//     if (language === 'es') {
//       console.log(`Hola ${firstname} ${lastname}`);
//     }
//   };
// }

// var greetEnglish = makeGreeting('en');
// var greetSpanish = makeGreeting('es');

// greetEnglish('Davin', 'Casely');
// greetSpanish('Davin', 'Casely');

// =================================================================================
// CLOSURES AND CALLBACKS
// =================================================================================

// function sayHiLater() {
//   var greeting = 'Hi!';

//   // ES6 SYNTAX
//   setTimeout(() => console.log(greeting), 3000);

//   setTimeout(function () {
//     console.log(greeting);
//   }, 3000);
// }

// sayHiLater();

// // jQuery uses function expressions and first-class functions!
// // $('button').click(function () {});

// // CALLBACK FUNCTION: A FUNCTION YOU GIVE TO ANOTHER FUNCTION, TO BE FUN WHEN THE OTHER FUNCTION IS FINISHED

// function tellMeWhenDone(callback) {
//   var a = 1000; // some work
//   var b = 1000; // some work

//   callback(); // the 'callback', it runs the function I give it!
// }

// tellMeWhenDone(function () {
//   console.log('I am done!');
// });

// tellMeWhenDone(function () {
//   console.log('All done...');
// });

// =================================================================================
// CALL(), APPLY(), BIND()
// =================================================================================

// var person = {
//   firstname: 'John',
//   lastname: 'Doe',
//   getFullName: function () {
//     var fullname = `${this.firstname} ${this.lastname}`;
//     return fullname;
//   },
// };

// console.log(person.getFullName());

// var logName = function (lang1, lang2) {
//   console.log(`Logged: ${this.getFullName()}`);
//   console.log(`Arguments: ${lang1} ${lang2}`);
//   console.log('------------------------------');
// };

// var logPersonName = logName.bind(person);
// logPersonName('en');

// logName.call(person, 'en', 'es');
// logName.apply(person, ['en', 'es']);

// (function (lang1, lang2) {
//   console.log(`Logged: ${this.getFullName()}`);
//   console.log(`Arguments: ${lang1} ${lang2}`);
//   console.log('------------------------------');
// }.apply(person, ['en', 'xxx']));

// // function borrowing
// var person2 = {
//   firstname: 'Jane',
//   lastname: 'Doe',
// };

// console.log(person.getFullName.apply(person2));

// // function currying
// function multiply(a, b) {
//   return a * b;
// }

// var multiplyByTwo = multiply.bind(this, 2);
// var multiplyByThree = multiply.bind(this, 3);

// console.log(multiplyByTwo(8));
// console.log(multiplyByThree(9));

// // FUNCTION CURRYING: CREATING A COPY OF A FUNCTION BUT WITH SOME PRESET PARAMETERS

// =================================================================================
// FUNCTIONAL PROGRAMMING
// =================================================================================

// function mapForEach(arr, fn) {
//   var newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(fn(arr[i]));
//   }

//   return newArr;
// }

// var arr1 = [1, 2, 3];
// console.log(arr1);

// // var arr2 = [];
// // for (var i = 0; i < arr1.length; i++) {
// //   arr2.push(arr1[i] * 2);
// // }

// var arr2 = mapForEach(arr1, function (item) {
//   return item * 2;
// });

// console.log(arr2);

// var arr3 = mapForEach(arr1, function (item) {
//   return item > 2;
// });

// console.log(arr3);

// var checkPastLimit = function (limiter, item) {
//   return item > limiter;
// };

// var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

// console.log(arr4);

// var checkPastLimitSimplified = function (limiter) {
//   return function (limiter, item) {
//     return item > limiter;
//   }.bind(this, limiter);
// };

// var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
// console.log(arr5);

// =================================================================================
// FUNCTIONAL PROGRAMMING PART 2
// =================================================================================

// var arr1 = [1, 2, 3];
// console.log(arr1);

// var arr6 = arr1.map((item) => item * 3);
// console.log(arr6);

// var arr7 = [2, 3, 4, 5, 6, 7].filter((x) => x % 2 === 0);
// console.log(arr7);

// =================================================================================
// OBJECT-ORIENTED JAVASCRIPT AND PROTOTYPAL INHERITANCE
// =================================================================================

// =================================================================================
// CONCEPTUAL ASIDE: CLASSICAL VS PROTOTYPAL INHERITANCE
// =================================================================================

// INHERITANCE: ONE OBJECT GETS ACCESS TO THE PROPERTIES AND METHODS OF ANOTHER OBJECT.

// =================================================================================
// UNDERSTANDING THE PROTOTYPE
// =================================================================================

// var person = {
//   firstname: 'Default',
//   lastname: 'Default',
//   getFullName: function () {
//     return `${this.firstname} ${this.lastname}`;
//   },
// };

// var john = {
//   firstname: 'John',
//   lastname: 'Doe',
// };

// // don't do this EVER! for demo purposes only!!!
// john.__proto__ = person;
// console.log(john.getFullName());
// console.log(john.firstname);
// console.log(john.lastname);

// var jane = {
//   firstname: 'Jane',
// };

// jane.__proto__ = person;
// console.log(jane.getFullName());

// =================================================================================
// EVERYTHING IS AN OBJECT (OR A PRIMITIVE)
// =================================================================================

// var a = {};
// var b = function () {};
// var c = [];

// =================================================================================
// REFLECTION AND EXTEND
// =================================================================================

// REFLECTION: AN OBJECT CAN LOOK AT ITSELF, LISTING AND CHANGING ITS PROPERTIES AND METHODS.

// var person = {
//   firstname: 'Default',
//   lastname: 'Default',
//   getFullName: function () {
//     return `${this.firstname} ${this.lastname}`;
//   },
// };

// var john = {
//   firstname: 'John',
//   lastname: 'Doe',
// };

// // don't do this EVER! for demo purposes only!!!
// john.__proto__ = person;

// for (const key in john) {
//   if (john.hasOwnProperty(key)) console.log(`${key}: ${john[key]}`);
// }

// var jane = {
//   address: '111 Main St.',
//   getFormalFullName: function () {
//     return `${this.lastname}, ${this.firstname}`;
//   },
// };

// var jim = {
//   getFirstName: function () {
//     return firstname;
//   },
// };

// =================================================================================
// FUNCTION CONSTRUCTORS, 'new', AND THE HISTORY OF JAVASCRIPT
// =================================================================================

// function Person(firstname, lastname) {
//   console.log(this);
//   this.firstname = firstname;
//   this.lastname = lastname;
//   console.log('This function is invoked');

//   // return { greeting: 'I got in the way' };
// }

// var john = new Person('John', 'Stockton');
// console.log(john);

// var jane = new Person('Jane', 'Wallace');
// console.log(jane);

// // FUNCTION CONSTRUCTORS: A NORMAL FUNCTION THAT IS USED TO CONSTRUCT OBJECTS

// =================================================================================
// FUNCTION CONSTRUCTORS, and '.prototype'
// =================================================================================

// function Person(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
// }

// Person.prototype.getFullName = function () {
//   return `${this.firstname} ${this.lastname}`;
// };

// var john = new Person('John', 'Stockton');
// console.log(john);

// var jane = new Person('Jane', 'Wallace');
// console.log(jane);
// Person.prototype.getFormalFullName = function () {
//   return `${this.lastname}, ${this.firstname}`;
// };

// console.log(john.getFormalFullName());

// =================================================================================
// DANGEROUS ASIDE: 'new' and functions
// =================================================================================

// function Person(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
// }

// Person.prototype.getFullName = function () {
//   return `${this.firstname} ${this.lastname}`;
// };

// var john = new Person('John', 'Stockton');
// console.log(john);

// var jane = new Person('Jane', 'Wallace');
// console.log(jane);
// Person.prototype.getFormalFullName = function () {
//   return `${this.lastname}, ${this.firstname}`;
// };

// console.log(john.getFormalFullName());

// =================================================================================
// CONCEPTUAL ASIDE: BUILT-IN FUNCTION CONSTRUCTORS
// =================================================================================

// var a = new Number('3');
// console.log(a);

// var b = new String('John');
// console.log(b);

// var c = new Date('3/1/2015');
// console.log(c);

// String.prototype.isLengthGreaterThan = function (limit) {
//   return this.length > limit;
// };

// console.log('John'.isLengthGreaterThan(5));

// Number.prototype.isPositive = function () {
//   return this >= 0;
// };

// console.log(Number(3).isPositive());

// =================================================================================
// DANGEROUS ASIDE: BUILT-IN FUNCTION CONSTRUCTORS
// =================================================================================

// var a = 3;
// var b = new Number(3);
// console.log(typeof a);
// console.log(typeof b);
// console.log(a == b);
// console.log(a === b);

// var c = Number('3');
// console.log(typeof c);

// =================================================================================
// DANGEROUS ASIDE: ARRAYS AND FOR...IN
// =================================================================================

// Array.prototype.myCustomFeature = 'cool!';

// var arr = ['John', 'Jane', 'Jim'];

// for (const key in arr) {
//   console.log(`${key}: ${arr[key]}`);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(`${i}: ${arr[i]}`);
// }

// =================================================================================
// OBJECT.CREATE AND PURE PROTOTYPAL INHERITANCE
// =================================================================================

// // POLYFILL: CODE THAT ADDS A FEATURE WHICH THE ENGINE MAY LACK.

// // POLYFILL
// if (!Object.create) {
//   Object.create = function (o) {
//     if (arguments.length > 1) {
//       throw new Error(
//         'Object.create implementation only accepts the first parameter'
//       );
//     }
//     function F() {}
//     F.prototype = o;
//     return new F();
//   };
// }

// var person = {
//   firstname: 'Default',
//   lastname: 'Default',
//   greet: function () {
//     return `Hi ${this.firstname} ${this.lastname}`;
//   },
// };

// var john = Object.create(person);
// john.firstname = 'John';
// john.lastname = 'Wayne';
// console.log(john.greet());

// =================================================================================
// ES6 AND CLASSES
// =================================================================================

// //SYNTACTIC SUGAR: A DIFFERENT WAY TO TYPE SOMETHING THAT DOESN'T CHANGE HOW IT WORKS UNDER THE HOOD
// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }

//   greet() {
//     return `Hi ${this.firstname}`;
//   }
// }

// class InformalPerson extends Person {
//   constructor(firstname, lastname) {
//     super(firstname, lastname);
//   }

//   greet() {
//     return `Yo ${this.firstname}`;
//   }
// }

// const davin = new Person('Davin', 'Casely');
// console.log(davin.greet());

// const informal = new InformalPerson('inform', 'thisguy');
// console.log(informal.greet());

// =================================================================================
// SECTION 7: ODDS AND ENDS
// =================================================================================

// =================================================================================
// ODDS AND ENDS
// =================================================================================

// var people = [
//   {
//     // the 'john' object
//     firstname: 'John',
//     lastname: 'Doe',
//     addresses: ['111 Main St.', '222 Third St.'],
//   },
//   {
//     // the 'jane' object
//     firstname: 'Jane',
//     lastname: 'Doe',
//     addresses: ['333 Main St.', '444 Fifth St'],
//     greet: function () {
//       return 'Hello!';
//     },
//   },
// ];

// console.log(people);
// console.log(people[1].greet());

// =================================================================================
// TYPEOF, INSTANCEOF, AND FIGURING OUT WHAT SOMETHING IS
// =================================================================================

// var a = 3;
// console.log(typeof a);

// var b = 'Hello';
// console.log(typeof b);

// var c = {};
// console.log(typeof c);

// var d = [];
// console.log(typeof d);
// // console.log(d.toString());
// console.log(Object.prototype.toString.call(d));

// function Person(name) {
//   this.name = name;
// }

// var e = new Person('Jane');
// console.log(typeof e);
// console.log(e instanceof Person);

// console.log(typeof undefined);
// console.log(typeof null);

// var z = function () {};
// console.log(typeof z);

// =================================================================================
// STRICT MODE
// =================================================================================

function logNewPerson() {
  'use strict';

  var person2;
  persom2 = {};
  console.log(persom2);
}

let person;
persom = {};
console.log(persom);
logNewPerson();
