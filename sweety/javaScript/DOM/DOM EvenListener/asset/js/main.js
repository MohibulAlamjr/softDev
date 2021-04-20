
// Add Even Listener 

document.getElementById("button").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("id").innerHTML = Date();
}


document.getElementById("button1").addEventListener("click", displayDate1);

function displayDate1() {
  document.getElementById("id1").innerHTML = Date();
}


document.getElementById("button2").addEventListener("mouseover", displayDate2);

function displayDate2() {
  document.getElementById("id2").innerHTML = Date();
}

document.getElementById("button3").addEventListener("mouseout", displayDate3);

function displayDate3() {
  document.getElementById("id3").innerHTML = Date();
}

// Add an Event Handler to an Element

document.getElementById("Button").addEventListener("click", function() {
    alert("Are You softDevian?");
  });

  document.getElementById("Button1").addEventListener("mouseover", function() {
    alert("Are You softDevian?");
  });


  document.getElementById("Button2").addEventListener("mouseout", function() {
    alert("Are You softDevian?");
  });

 
















