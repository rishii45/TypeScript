let greetings: string = "Hello, I am Rishikesh";

console.log(greetings);

//number
let userId= 334455.3
userId.toFixed();

//boolean
let isloggedIn: boolean = false

//any

let hero: any;

function getHero() {
    return "IronMan"
    // return "true"  -will not give error as the type is any
    // return 90       
}

hero = getHero();

export{}