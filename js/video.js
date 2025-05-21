const video_container = document.getElementById("video");
const start_video = document.getElementById("start_img");

function toggleVideo() {
	const video_div_container = document.createElement("video");
	const video_source = document.createElement("source");
	video_source.src = "./static/images/watchOurVideo/mov_bbb.mp4";
	video_source.type = "video/mp4";
	video_div_container.controls = "true";
	video_div_container.autoplay = "true";
	video_container.style.background = "center";
	video_div_container.appendChild(video_source);
	video_container.appendChild(video_div_container);
	start_video.classList.add("none");
	console.log("asd");
}
video_container.addEventListener("click", toggleVideo);
