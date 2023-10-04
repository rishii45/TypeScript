function addTwo(num: number): number{
    return num + 2;
    // return "hello";               //it is not allowed but not generating error [ give type to function that is number]
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5);
getUpper("rishi");
signUpUser("Rishi","rishi.mandloi09@gmail.com", false);
loginUser("R", "r@gmail.com")

// function getValue(myval: number): boolean {
//     if(myval > 5) {
//         return true;
//     }
//     return "200 OK";
// }

//giving type to arrow function
const getHello = (s: string): string => {
    return "";
}


const heros = ["ironman","spiderman","thor"]
// const heros = [1,2,3]

heros.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

export {}