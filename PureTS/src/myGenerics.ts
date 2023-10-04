const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}

// identityThree(true)

function identityFour<T>(val: T): T {
    return val
}

interface Bottle{
    brand: string,
    type: number
}

// identityFour<Bottle>({})

//-----------------------Generics in array-----------------------------

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

//------------------------Generics in arrow functons------------------------

const getMoreSearchProducts = <T,>(products: T[]): T=> {
    //some database operations
    const myIndex = 9
    return products[myIndex]
}

//---------------------------extends in Generics--------------------------
interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return{
        valOne,
        valTwo
    }
}
anotherFunction(3, {
    connection: "",
    username: "",
    password: ""
})


//--------------------------Generic Class Type----------------------

interface Quiz {
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] =[]

    addToCart(product: T){
        this.cart.push(product)
    }
}
