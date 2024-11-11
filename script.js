const times = document.querySelector(".times");
const loveMe = document.querySelector(".loveMe");
let timeClicked = 0;
let timesCount = 0;

loveMe.addEventListener("click", (e) => {
	if (timeClicked === 0) {
		timeClicked = new Date().getTime();
	} else {
		if (new Date().getTime() - timeClicked < 800) {
			clickedHandler(e);
			timeClicked = 0;
		} else {
			timeClicked = new Date().getTime();
		}
	}
});

function clickedHandler(e) {
	const createdImg = document.createElement("img");
	createdImg.classList.add("img");
	createdImg.src = "heart.svg";

	const x = e.clientX;
	const y = e.clientY;

	const leftOffset = e.target.offsetLeft;
	const topOffset = e.target.offsetTop;
	init;

	const xInside = x - leftOffset;
	const yInside = y - topOffset;

	createdImg.style.top = `${yInside}px`;
	createdImg.style.left = `${xInside}px`;

	loveMe.appendChild(createdImg);

	setTimeout(() => loveMe.removeChild(createdImg), 1000);

	times.innerText = ++timesCount;
}
