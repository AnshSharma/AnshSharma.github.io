require(['skrollr'], function(skrollr){
	var s = skrollr.init();
});

require(['howler'], function(howler) {
	const playBtn = document.querySelector(".play");
	const muteBtn = document.querySelector(".mute");
	const unmuteBtn = document.querySelector(".unmute");
	var sound = new Howl({
	  src: ['songs/sweetlorraine.ogg'],
	  autoplay: false,
	  preload: true,
	  loop: false,
	  volume: 1,
	  onend: function() {
		console.log('Finished!');
	  }
	});
	
	let id;

	playBtn.onclick = function () {
		id = sound.play();
	};
	muteBtn.onclick = function () {
		sound.mute(true, id);
	};
	unmuteBtn.onclick = function () {
		sound.mute(false, id);
	};

	sound.on("end", function () {
		playBtn.disabled = false;
	});
	sound.on("play", function () {
		playBtn.disabled = true;
	});
});