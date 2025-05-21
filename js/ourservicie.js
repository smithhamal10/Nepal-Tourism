const images = [
	"./static/images/ourServicies/1.png",
	"./static/images/ourServicies/2.png",
	"./static/images/ourServicies/3.png",
	"./static/images/ourServicies/4.png",
	"./static/images/ourServicies/5.png",
	"./static/images/ourServicies/6.png",
];
const titles = [
	"flight booking",
	"hotel & resort booking",
	"family trip planner",
	"cruise tour",
	"fire camp",
	"corporate holidays",
];
const informations = [
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
];

const container = document.getElementById("ourservice-container");

for (let i = 0; i < images.length; i++) {
	const div = document.createElement("div");
	const img = document.createElement("img");
	const h4 = document.createElement("h4");
	const p = document.createElement("p");

	const title = document.createTextNode(titles[i]);
	const information = document.createTextNode(informations[i]);

	img.src = images[i];
	img.alt = titles[i];

	div.id = "img" + i;
	div.className = "flex-btw  imgmedia  bg-hover-aqua";

	h4.appendChild(title);
	p.appendChild(information);
	div.appendChild(img);
	div.appendChild(h4);
	div.appendChild(p);
	container.appendChild(div);

	div.onclick = () => {
		console.log(i);
		let lightbox = document.getElementById("lightbox");
		let lightboxContainer = document.createElement("container");
		let imgShow = document.createElement("img");
		let h4Show = document.createElement("h4");
		let pShow = document.createElement("p");
		const titleShow = document.createTextNode(titles[i]);
		const informationShow = document.createTextNode(informations[i]);
		h4Show.appendChild(titleShow);
		pShow.appendChild(informationShow);
		imgShow.src = images[i];
		imgShow.alt = titles[i];
		lightboxContainer.className = "lightboxContainer";
		lightbox.innerHTML = "";
		lightboxContainer.appendChild(imgShow);
		lightboxContainer.appendChild(h4Show);
		lightboxContainer.appendChild(pShow);
		lightbox.appendChild(lightboxContainer);
		lightbox.className = "shows cursor";
	};

	lightbox.onclick = () => (lightbox.className = "");
}
