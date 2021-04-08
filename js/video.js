var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

})

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add ("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Normal");
	video.classList.remove("oldSchool")

});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("Slow it down " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.05;
	console.log("Speed it up" + video.playbackRate);
});

document.querySelector("#mute").addEventListener("click", function() {
	var mute = document.getElementById("slider").value / 100;
	if (video.muted == true) {    
		video.muted = false;
		video.volume = mute;
		document.querySelector("#mute").innerHTML = "Mute";
 	}
 	else {
		video.muted = true;
		video.volume = 0;
		document.querySelector("#mute").innerHTML = "Unmute";
	 }
});


document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original Location " + video.currentTime)
	if (video.currentTime < video.duration - 15){
		video.currentTime += 15;
	}
	else {
		video.currentTime = 0;
	}
	console.log("New Location " + video.currentTime);
});


document.querySelector("#slider").addEventListener("change", function() {
	var slideValue = document.getElementById("slider").value;
	video.volume = slideValue / 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});
