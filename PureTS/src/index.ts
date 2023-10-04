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

    protected _courseCount = 1    //it is accesible in same class and sub class which inherits this class

    readonly city: string = "Indore"
    constructor(
        public email: string,
        public name: string,
        // private userId: string
        ){
    }

    private deleteToken() {
        console.log("Token Deleted");    
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {      //A 'set' accessor cannot have a return type annotation.
        if (courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class subUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const rishi = new User("r@r.com","rishi")
// rishi.name
// rishi.deleteToken()    //Property 'deleteToken' is private and only accessible within class 'User'.