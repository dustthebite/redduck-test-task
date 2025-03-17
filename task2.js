const multiply = (a,b,c) => a*b*c; 
const add = (a,b,c,d,e) => a+b+c+d+e;

const curry = (f) => {
    return curried = (...args) => {
        if (f.length !== args.length) return curried.bind(null, ...args)
        return f(...args)
    }
}

curry(add)(1)(2)(3)(4)(5) == add(1,2,3,4,5)
curry(multiply)(1)(2)(3) == multiply(1,2,3)
