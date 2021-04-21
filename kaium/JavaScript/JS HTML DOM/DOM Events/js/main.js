function changeText(id) {
  id.innerHTML = "Ooops!";
}
function changeDate(x) {
  x.innerHTML = Date();
}
document.getElementById("btn").onclick=myfun();
function myfun() {
    document.getElementById("demo").innerHTML = Date();
    
}
function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function mOver(obj) {
  obj.innerHTML = "Thank You"
}
function mOut(obj) {
  obj.innerHTML = "Sweety"
}
function mOver(obj) {
  obj.innerHTML = "kaium "
}