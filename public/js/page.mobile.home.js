function welcome() {
	/*
	speakParagraph("Welcome to Voice Wikipedia. \
		Use your voice to tell which Wikipedia entry to search for.\
		No need to use your eyes, the entry's content will be reading to you!.\
		Let's try it. Say. Show me.")
*/
	speakParagraph("Welcome to Voice Wikipedia.")
}

function list() {
	speakParagraph("There are 10 recent wikipedia articles.\
		Do you want to hear them?.")
}

function help() {
	speakParagraph("Welcome to Voice Wikipedia. \
		You can using voice commands to control this application.\
		If you want to search for a wikipedia entry. Say. Show me.\
		If you want to hear recent wikpedia. Say. List.")
}

function search(term) {
	para = "You want to search for " + term + "." +
		"Found an article. Do you want to hear this?.";
	writelog(para);
	speakParagraph(para);
}

function writelog(str) {
	// node = document.
	// $(".log").text(str);
}

function init() {
	console.log("INIT");
	console.log(annyang);
	if (annyang) {
	
	  // Let's define our first command. First the text we expect, and then the function it should call
	  var commands = {
	  	'show me *entry': search,
	  	'list': search,
	  	'help': help,
	  	'help me': help,

	  	// 'help': help
	  };
	  // Add our commands to annyang
	  annyang.addCommands(commands);

	  // Start listening. You can call this here, or attach this call to an event, button, etc.
	  annyang.start();
	}
}


welcome();
init();