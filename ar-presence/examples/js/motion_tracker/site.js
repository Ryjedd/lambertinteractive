var thisVideo = vid;
var canvas = document.getElementById('motion');
var score = document.getElementById('score');

//is message visible
var secretVisible = false;
//set timer for full reset
var resetTimer = setTimeout(resetAll, 0);
var resetCounter = 0;

function initSuccess() {
	DiffCamEngine.start();
	alert('Something went wrong.');
	console.log(thisVideo);
}

function initError() {
	alert('Something went wrong.');
}

function resetAll(){
		//After 30 seconds of inaction, reset message
		if(secretVisible == true && resetCounter == 0){
			$('.secret-message').fadeOut(250);
			resetCounter ++;
			clearTimeout(resetTimer);
			resetTimer = setTimeout(resetAll, 5000);
		}else if(secretVisible == true){
			secretVisible = false;
			clearTimeout(resetTimer);
			resetCounter = 0;
		}
		
}

function secretMessage(){
		//show secret message
		//score.textContent = pay.score;
		$('.secret-message').fadeIn(250);
		secretVisible = true;
		resetTimer = setTimeout(resetAll, 5000);
}

function capture(payload) {
		if(payload.score >= 250 && secretVisible == false){
			var msg = secretMessage();
		}
		
		console.log("Happening");
		
}

DiffCamEngine.init({
	video: vid,
	motionCanvas: canvas,
	initSuccessCallback: initSuccess,
	initErrorCallback: initError,
	captureCallback: capture
});
