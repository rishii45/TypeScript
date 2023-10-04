"use strict";
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Indore"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; //it is accesible in same class and sub class which inherits this class
        this.city = "Indore";
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const rishi = new User("r@r.com", "rishi");
// rishi.name
// rishi.deleteToken()    //Property 'deleteToken' is private and only accessible within class 'User'.
