(function(window)	{
	var byeSpeaker = {};
	byeSpeaker.speak = function (name)	{
	console.log(speakWord + name);
	}

	window.byeSpeaker = byeSpeaker;

var speakWord = "Good Bye ";

})(window);