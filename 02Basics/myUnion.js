var score = 33;
score = "33";
var rishi = { name: "rishi", id: 45 };
rishi = { userName: "rk", id: 45 };
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//Union in Array
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, 4, true];
var pi = 3.14;
//pi = 3.145;                 //Type '3.145' is not assignable to type '3.14'
var seatAllotment;
seatAllotment = "aisle";
//seatAllotment = "crew"      //Type '"crew"' is not assignable to type '"aisle" | "middle" | "window"'
