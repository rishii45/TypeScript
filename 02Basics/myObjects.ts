// const user = {
//     name: "Rishi",
//     email: "rishi@gmail.com",
//     isActive: true
// }
// //--------------------Parameter Type Annotation(Object)----------------
// function createUser({name: string, isPaid: boolean}) {}

// let newUser = {name: "Rishi", isPaid: false, email: "r@gmail.com"};
// createUser(newUser);


// //----------------------returning object---------------
// function createCourse(): {name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }

// //----------------------type alias--------------------------

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})



//-------------------readonly and optional(?)------------------
type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    cardDetail?: string     // ? -> optional
}

let myUser: User = {
    _id: "1234",
    name: "rishi",
    email: "r@gmail.com",
    isActive: true
}

myUser.name = "rk";
// myUser._id = "45";             //Cannot assign to '_id' because it is a read-only property.
export {}