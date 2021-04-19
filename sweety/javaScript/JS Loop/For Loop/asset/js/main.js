// Statement 

var Names = ["Abul", "Kabul", "Saabi", "Forder"];
var i = 1;
var len = Names.length;
var txt = "";

for (; i < len; i++) {
  txt += Names[i] + "\n";
}
console.log(txt);

// ForLoopIn

// For Object 

var child = {
    fname : "Sidratul",
    lname : "Mawa",
    age : 02,
};
var text = "";
var a;
for (a in child){
    text += child[a] + " ";
}
console.log(text);


var child2 = {
    fname : "Sidratul",
    lname : "Mawa",
    age : 02,
};
var text = "";
var a;
for (a in child2){
    console.log(child2[a]);   
}

// For In Over Array 

var a = [3,4,56,67,44,45];
var b;
for(b in a){
    txt += a[b] + "\n";
}
console.log(txt);

// Array.ForEach for value

var numbers = [40, 43, 9, 19, 25,28,32];
numbers.forEach(myFunction);
function myFunction(value) {
    console.log(value);
  }

  // Array.ForEach for Index

  var numbers = [21,22,23,45,34,,23,54];
  var c;
  for (c in numbers){
      console.log(c);
  }


//   For Loop of 

var num = [13,25,72,15,18,12,44];
var a;
for ( a of num){
    console.log(a);
}


// For loop of= string 

var Name = ["S","H","O","V","H","A","N","A"];
var a;
for ( let a of Name){
    console.log(a);
}

var Name1 = ["S","H","O","V","H","A","N","A"];
var b;
for ( let b in Name1){
    console.log(b);
}

// FOR CONDITION 
function calculator (x,y,z){

    if(x === "sum"){
        var ans = y + z;
    }

    else if(x === "sub"){
        var ans = y - z;
    }

    else if(x === "div"){
        var ans = y/z;
    }
    else if (x === "mul"){
        var ans = y * z;
    }
    else {
        ans = "Tumi Fail"
    }
    return ans;
}

console.log(calculator("sum",10,12));
console.log(calculator ("sub",20,10));
console.log(calculator ("div",6,2));
console.log(calculator ("mul",9,9));

console.log(calculator("DIV",40,4));








