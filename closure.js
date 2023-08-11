// Lexical Scope defines how variable names resolved in nested functions.

// Lexical scope is only an important part of closure.
// Lexical scope -- defines where it is declared or defined


// global scope
let x = 1;

// *** Lexical scope example *** this is not closure. ****
const parentFunction = () => {
    //local scope
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    }

    childFunction();
}

parentFunction();

// *** end ***

// *** CLOSURE DEFINITION ***
// w3schools: "A closure is a function having access to the parent scope, even after the parent function has closed."
// A closure is created when we define a function, now when a funciton is executed.


// *** example for closure ***


const parentFunction1 = () => {
    //local scope
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    }

    return childFunction;
}

const result = parentFunction1();
console.log(result);
result(); // accessing global and parent scoped values even after parent function has closed.
result(); // accessing global and parent scoped values even after parent function has closed.
result(); // accessing global and parent scoped values even after parent function has closed.
console.log(x);
console.log(myValue); // should throws error

// closure using --- IIFE ( Immediately Invoked Function Expression)

const privateCounter = (() => {
    let count = 0;
    console.log(`initial value: ${count}`);
    return () => { count += 1; console.log(count); }
})();

privateCounter(); // returned  function uses count value even after the fucntion has been closed
privateCounter();
privateCounter();


// IIFE - example 2

const credits = ((num) => {
    let credits = num;
    console.log(`initial credits value: ${credits}`);

    return () => {
        credits -= 1;

        if (credits > 0) console.log(`playing game, ${credits} credits(s) remaining`);

        if (credits <= 0) console.log('not enough credits');

    }
})(3);
credits(); // even after closed parent function, parent scoped value is accessable inside child funciton
credits();
credits();