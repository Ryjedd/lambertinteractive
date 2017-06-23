// create youtube player
        var player;
		var isPlaying = false;
		
        function onYouTubePlayerAPIReady() {
            player = new YT.Player('player', {
              height: '100%',
              width: '100%',
			  playerVars:{
				'controls': 0,
				'autohide': 1,
				'showinfo' : 0,
				'rel': 0,				
			  },
              videoId: 'ha-bh4N3JXQ',
              events: {
                onStateChange: onPlayerStateChange
              }
            });
        }

        // autoplay video
        function onPlayerReady(event) {
            event.target.playVideo();
        }

        // when video ends
        function onPlayerStateChange(event) {        
            if(event.data === 0) {          
                $('#player').fadeOut(250);
				isPlaying = false;
            }
        }