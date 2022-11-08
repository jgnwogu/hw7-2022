var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to false");
	console.log("Loop is set to false");
});

var span = document.getElementById("volume");

function change(val) {
	span.innerHTML = val + '%';
  }

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	change(document.getElementById("slider").value);
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
 });

 const tenpercent = 0.1;
 var slowarray = [1];
 var fastarray = [1];

 function slower(arr){
	video.playbackRate -= video.playbackRate * tenpercent;
	arr.push(video.playbackRate);
 }

 function faster(arr){
	arr.pop();
	video.playbackRate = arr[arr.length - 1];
 }

 document.querySelector("#slower").addEventListener("click", function() {
	if (fastarray.length > 1){
		fastarray.pop();
		video.playbackRate = fastarray[fastarray.length - 1];
	}
	else{
		slower(slowarray);
	}
	console.log('Slow down video');
	console.log('Speed is ' + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	if (slowarray.length > 1){
		faster(slowarray);
	}
	else{
		video.playbackRate += video.playbackRate * tenpercent;
		fastarray.push(video.playbackRate);
	}
	console.log('Speed up video');
	console.log('Speed is ' + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	}
	else{
	video.currentTime += 10;
	}

	console.log("Video current time is " + video.currentTime);
 });

 let muted = 1;

 document.querySelector("#mute").addEventListener("click", function() {
	muted += 1;
	if (muted % 2 == 0){
	document.querySelector("#mute").innerHTML = "Unmute";
	video.muted = true;
	}
	else{ 
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
	}
 });


 document.querySelector("#slider").addEventListener("change", function(){
	video.volume = document.querySelector("#slider").value * tenpercent * tenpercent;
	change(document.getElementById("slider").value);
 });

 document.querySelector("#vintage").addEventListener("click", function() {
	
	video.className = "video oldSchool";
	
 }); 

 document.querySelector("#orig").addEventListener("click", function() {
	
	video.className = "video";

}); 