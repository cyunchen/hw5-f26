var video;

window.addEventListener("load", function () {
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;

	var volume = document.getElementById("volume");
	var slider = document.getElementById("slider");
	var muteButton = document.querySelector("#mute");

	function updateVolume() {
		volume.textContent = Math.round(video.volume * 100) + "%";
	}

	document.getElementById("play").addEventListener("click", function () {
		video.play();
		updateVolume();
	});

	document.getElementById("pause").addEventListener("click", function () {
		video.pause();
	});

	document.getElementById("slower").addEventListener("click", function () {
		video.playbackRate *= 0.9;
		console.log("Playback speed:", video.playbackRate);
	});

	document.getElementById("faster").addEventListener("click", function () {
		video.playbackRate /= 0.9;
		console.log("Playback speed:", video.playbackRate);
	});

	document.getElementById("skip").addEventListener("click", function () {
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

	document.getElementById("vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});

	document.getElementById("orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});

});
