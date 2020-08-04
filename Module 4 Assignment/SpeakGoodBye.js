var byeSpeaker = {};


	(function(window){
		byeSpeaker.speak= function(name){
		var speakWord = "Goodbye";
		console.log(speakWord + " " + name);
	    }
	    window.byeSpeaker= byeSpeaker;
	 }
)(window);