  // concerting arrays to string  

  var flowers = ["Rose", "Lotus", "Magnolia", "Lily"];
  console.log(flowers.toString());

  // using join elements
  

  var flowers = ["Rose", "Lotus", "Magnolia", "Lily"];
  console.log(flowers.join("  *  "));
  console.log(flowers.join("  &  "));


  // popping elements

  var flowers = ["Rose", "Lotus", "Magnolia", "Lily"];
  console.log(flowers.pop());
  console.log(flowers.pop());
  console.log(flowers.pop());

  // pushing elements
 
  var flowers = ["Rose", "Lotus", "Magnolia", "Lily"];
  var x = flowers.push("Daisy");
  console.log(flowers);
  var x = flowers.push("Beli");
  console.log(flowers);

// shifting elements
var flowers = ["Rose", "Lotus", "Magnolia", "Lily"];
console.log(flowers.shift());
console.log(flowers.shift());
console.log(flowers.shift());

// unshifting elements
var flowers = ["Rose", "Lotus", "Magnolia", "Lily"];
var y = flowers.unshift("Bokul");
console.log(flowers);
var y = flowers.unshift("Shiuli");
console.log(flowers);

// changing ekements 
 // indexes
var flowers = ["Rose", "Lotus", "Magnolia", "Lily"];
flowers[2] = "Tuilip";
console.log(flowers);

// length
var flowers = ["Rose", "Lotus", "Magnolia", "Lily"];
var y = flowers[flowers.length] = "Daisy";
console.log(flowers);

// delete elemrents
var flowers = ["Rose", "Lotus", "Magnolia", "Lily"];
var z = delete flowers[3];
console.log(flowers);
var z = delete flowers[2];
console.log(flowers);


// splicing 

var flowers = ["Rose", "Lotus", "Magnolia", "Lily"];
flowers.splice(1, 2, "Tuilip", "daisy");
console.log(flowers);
var flowers1 = ["Rose", "Lotus", "Magnolia", "Lily"];
flowers1.splice(2, 3, "Tuilip", "daisy");
console.log(flowers1);
flowers1.splice(2,1);
console.log(flowers1);


// concating one elements
var flowers = ["Rose", "Lotus", "Magnolia", "Lily"];
var flowerss = flowers.concat("Daisy");
console.log(flowerss);
console.log(flowerss.toString());

// concating two elements

var flowers = ["Rose", "Lotus", "Magnolia", "Lily"];
var food = ["mango", "banana", "apple", "orange"];
var store = flowers.concat(food);
console.log(store);
console.log(store.toString());

// concating three elements

var flowers = ["Rose", "Lotus", "Magnolia", "Lily"];
var food = ["mango", "banana", "apple", "orange"];
var color =["blue", "black", "white", "purpel"];
var elements = food.concat(flowers,color);
console.log(elements);
console.log(elements.toString());