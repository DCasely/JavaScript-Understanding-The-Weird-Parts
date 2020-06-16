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
var a;
console.log(a);

if (a === undefined) {
  console.log('a is undefined!');
} else {
  console.log('a is defined!');
}
