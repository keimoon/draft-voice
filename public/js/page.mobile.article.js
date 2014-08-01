function readTitle(title) {
	speakEnglish("This is article " + title + " in Wikipedia.");
}

readTitle("Bicycle");

var autoNext = true;

var curid = 0; // current paragraph.

// nextId returns the next id of the reading paragraph.
function getId(node) {
	id = $(node).attr("id").substring(2);
	return parseInt(id);
}

function speakParaWithId(id) {
	speakPara($("#p-" + id.toString()));
}

var scrollToElement = function(node, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: node.offset().top - 100
    }, speed);
}


// Speak paragraph #id.
function speakPara(node) {	
	if (typeof node == "undefined") {
		return
	}
	scrollToElement(node, 600);
	$("p").css("color", "#444");
	curid = getId(node);

	console.log("Paragraph: " + curid);
	node.css("color", "red");
	// console.log($me.text());
	cancelSpeak();
	speakParagraph(node.text(), function (event) {
		node.css("color", "#444");
		console.log("DONE!");
		console.log(autoNext);
		if (autoNext) {
			curid++;
			speakPara($("#p-" + curid.toString()));
		}
	});
}

// ACTIONS
function doNext() {
	curid ++;
	speakParaWithId(curid);
}

function doPrev() {
	if (curid > 0) {
		curid--;
		speakParaWithId(curid);
	}
}





$("p").click(function (event) {
	speakPara($(this));
});
