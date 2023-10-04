"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello";               //it is not allowed but not generating error [ give type to function that is number]
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("rishi");
signUpUser("Rishi", "rishi.mandloi09@gmail.com", false);
loginUser("R", "r@gmail.com");
// function getValue(myval: number): boolean {
//     if(myval > 5) {
//         return true;
//     }
//     return "200 OK";
// }
//giving type to arrow function
var getHello = function (s) {
    return "";
};
var heros = ["ironman", "spiderman", "thor"];
// const heros = [1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
