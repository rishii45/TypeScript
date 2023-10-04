// const user: (string | number)[] = ["rk",45]

//---------------------tuples-------------------------
let user: [string,number,boolean];
user = ["rk",45,true];

let rgb: [number,number,number] = [255,123,112];


type User = [number, string];

const newUser: User = [112, "exp@gmail.com"] 

newUser[1] = "hc.com"
// newUser.push(true)


export {}