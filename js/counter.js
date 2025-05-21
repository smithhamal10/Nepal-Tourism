let nums = document.querySelectorAll(".nums .num");
let num = document.querySelectorAll(".num");

let section = document.querySelector(".main-title-container");
let started = false;

let nf = new Intl.NumberFormat("en-US");
nf.format(num[1].textContent);

console.log(num[0].textContent);

window.onscroll = function () {
	console.log("fad");
	scrollFunction();
	if (window.scrollY >= section.offsetTop) {
		if (!started) {
			nums.forEach((num) => startCounter(num));
		}
		started = true;
	}
};

function startCounter(el) {
	let goal = el.dataset.goal;

	let count = setInterval(() => {
		el.textContent++;

		if (el.textContent == goal) {
			console.log("done");

			clearInterval(count);
		}
	}, 2000 / goal);
}
