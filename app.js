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

// long running function
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {}
  console.log('finished function');
}

function clickHandler() {
  console.log('click event!');
}

// listen for the click event

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
