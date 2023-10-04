interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponName: string, value: number): number
}

//-------------------Re-opening of interface---------------------
interface User {
    githubToken: string;
}

//---------------------Extending Interface---------------------
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const rishi: Admin = {
    dbId: 22,
    email: "r@r.com",
    userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "rishi10", off: 10) => {
        return 10
    }

}
rishi.email = "rk@gmail.com";
// rishi.dbId = 33

export {}