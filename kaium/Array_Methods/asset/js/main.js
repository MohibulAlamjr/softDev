// Converting Arrays to Strings
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// join() method
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log( fruits.join(" * "));


// Popping and Pushing

// Popping
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.pop();
console.log(fruits.pop());
console.log(fruits);

// push()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.push("Kiwi");
console.log(fruits);

// Shifting Elements

// shift()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.shift();
console.log(fruits);

// unshift()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.unshift("Lemon");
console.log(fruits);

// Changing Elements

// index number
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits[0] = "Kiwi";
console.log(fruits);
fruits[1] = "Kiwi";
console.log(fruits);
fruits[2] = "Kiwi";
console.log(fruits);
fruits[3] = "Kiwi";
console.log(fruits);


// The length property(onclick)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
function myFunction() {
    fruits[fruits.length] = "Kiwi";
    console.log(fruits);
}  

// Deleting Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("The first fruit is: " + fruits[0]);
delete fruits[0];
console.log("The first fruit is: " + fruits[0]);

// Splicing an Array (onclick)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Original Array: " + fruits);
function myFunction() {
    fruits.splice(2, 0, "Lemon", "Kiwi");
    console.log( "New Array: " + fruits);
}

// Merging (Concatenating) Arrays

// concat
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
console.log(myChildren);
// Merging Three Arrays
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);








