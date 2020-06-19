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

// IIFE
(function (global, name) {
  var greeting = 'Hello';
  global.greeting = 'Hello';

  console.log(`${greeting} ${name}`);
})(window, 'Davin'); // IIFE

console.log(greeting);
