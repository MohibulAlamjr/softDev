// For Loop

for( let i =0;i<10;i++){
    console.log(i);
}

// Another one 

var j=0;
for (; j < 11 ;){
    console.log(j);
    j++;
}


var Name = ["Sweety", "Mouly", "Nishi", "Anik","Joy","Kaium"];
var n = 0;
var txt = "";
for (;Name[n];) {
  txt += Name[n] + "\n";
  n++;
}
console.log(txt);

// While Loop

var s = 2
while (s > 12){
    console.log(s);
    s++;
}

var Name = ["Mouly", "Nishi", "Anik","Joy","Kaium"];
var n = 0;
var txt = "";
while (Name[n]) {
  txt += Name[n] + "\n";
  n++;
}
console.log(txt);

// Do While 

var a = 3;
 do {
     console.log(a);
     a++;
 }
 while (a < 14);

// BREAK 

var myFunction = [50,8,45,4,7];

var x;
for (x of myFunction){
    var index = "";

    if(x <= 23){
        index = "Yes";
         break;
    }
    else{
        index = "No";
    }
}
console.log(index);

// R AKTA

var myFunction = [50,8,45,4,7,23];

var x;
for (x of myFunction){
    var index = "";

    if(x >= 100){
        index = "Yes";
         break;
    }
    else{
        index = "No";
    }
}
console.log(index);


var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i == 9) { 
      break;
     }
  text += "The number is " + i + "\n";
}
console.log(text);

// CONTINUE 

// CALCULATOR

function myCalculator(x,y,z){
    var ans = -1;

    switch(z){
        case "sum":
        ans = x + y;
        break;
        
        case "sub":
        ans = x - y;
        break;

        case "mul":
        ans = x * y;
        break;

        case "div":
        ans = x/y;
        break;

        case "mod":
        ans = x%y;
        break;
    }
    return ans;
}
console.log(myCalculator(400,740,"sub"));





function myCalculator1(x,y,z){
    var ans = -1;

    switch(z){
        case "sum":
        case "SUM":
        ans = x + y;
        break;
        
        case "sub":
            case "SUB":
        ans = x - y;
        break;

        case "mul":
            case "MUL":
        ans = x * y;
        break;

        case "div":
            case "DIV":
        ans = x/y;
        break;

        case "mod":
            case "MOD":
        ans = x%y;
        break;
    }
    return ans;
}
console.log(myCalculator1(400,740,"SUM"));


// gdgfruiwfgsfshrfierh