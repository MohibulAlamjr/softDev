// arrow function
   
word = () => {
    return "Assalamualaikum";
}
console.log(word());


hello = () => {
    return "Hello World!";
}

console.log(hello());


const x = (x,y) => x * y
    console.log(x(2,3));

const z = (x,y,z) => x+y+z;
console.log(z(3,4,7));

const a = (x,y,z) => x*y*z;
console.log(a(3,4,7));

const b = (x,y,z) => x+y+z;
console.log(b('n','m','o'));

const c = (x,y,z) => x/y/z;
console.log(c(3,4,7));


const d = m => m;
console.log(d(3,6,7));

const u = b => b;
console.log(d(3,6,7));



// general function

function myFunction(a,b){
    return a*b;
}

console.log(myFunction(7,8));