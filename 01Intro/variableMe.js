"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello, I am Rishikesh";
console.log(greetings);
//number
var userId = 334455.3;
userId.toFixed();
//boolean
var isloggedIn = false;
//any
var hero;
function getHero() {
    return "IronMan";
    // return "true"  -will not give error as the type is any
    // return 90       
}
hero = getHero();
