var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

// toString 
console.log(fruits.toString());

// join 
console.log(fruits.join(' & '));

// pop
console.log( fruits.pop());
// shift
console.log(fruits.shift());
// again pop 
console.log( fruits);
// unshift 
fruits.unshift("Lemon"); 
console.log( fruits);
// changing Element
fruits[0]="Banana";
console.log( fruits);
// delet emlement 
delete fruits[0]
console.log( fruits);

// Splicing
var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(0, 1, "Lemon", "Kiwi");
console.log(fruits1);

// concate
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myWifes=["banana","orenge","appel","Lemon"];
var myChildren = myGirls.concat(myBoys,myWifes);
console.log(myChildren.toString());

// one element concate
 var boyfriends=["mofiz", "abul","kasem"];
 var boyfriendsgroup2=boyfriends.concat("korim");
 console.log(boyfriendsgroup2);