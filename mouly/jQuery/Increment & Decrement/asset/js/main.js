const count = document.getElementById("count");

const add = document.getElementById("add-btn");

const minus = document.getElementById("minus-btn");

let myCount = 0;

add.addEventListener("click", function () {
	//console.log("Add was clicked");

	myCount += 1;
	//console.log(myCount);
	count.innerText = myCount;
	if (myCount > 0) {
		count.style.color = "#2ecc71";
	}
});

minus.addEventListener("click", function () {
	//console.log("Minus was clicked");

	myCount -= 1;
	//console.log(myCount);
	count.innerText = myCount;
	if (myCount < 0) {
		count.style.color = "#e74c3c";
	}
});
