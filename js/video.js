var video;

window.addEventListener("load", function () {
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

	var volume = document.querySelector("#volume");
	var slider = document.querySelector("#slider");
	var muteButton = document.querySelector("#mute");

	function updateVolume() {
		volume.textContent = Math.round(video.volume * 100) + "%";
	}

	document.querySelector("#play").addEventListener("click", function () {
		video.play();
		updateVolume();
	});

	document.querySelector("#pause").addEventListener("click", function () {
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function () {
		video.playbackRate *= 0.9;
		console.log("Playback speed:", video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function () {
		video.playbackRate /= 0.9;
		console.log("Playback speed:", video.playbackRate);
	});

	document.querySelector("#skip").addEventListener("click", function () {
		if (Number.isFinite(video.duration) && video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log("Current location:", video.currentTime);
	});

	muteButton.addEventListener("click", function () {
		video.muted = !video.muted;
		muteButton.textContent = video.muted ? "Unmute" : "Mute";
	});

	slider.addEventListener("input", function () {
		video.volume = Number(slider.value) / 100;
		updateVolume();
	});

	document.querySelector("#vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});

	updateVolume();
});
