let score: string | number = 33;
score= "33"

type User = {
    name: string;
    id: number;
}

type Admin = {
    userName: string;
    id: number;
}

let rishi: User | Admin = {name: "rishi", id: 45}

rishi = {userName: "rk", id: 45}


// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    if(typeof id === "string") {
        id.toLowerCase();
    }
}

//Union in Array

const data: number[] = [1,2,3,4]
const data2: string[] = ["1","2","3"]
const data3: (string | number | boolean)[] = ["1","2",3,4,true]

let pi:3.14 = 3.14;
//pi = 3.145;                 //Type '3.145' is not assignable to type '3.14'

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
//seatAllotment = "crew"      //Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'


export {}