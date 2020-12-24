$(document).ready(function () {
	$("#chapter").click(function(event){
		var now = $(this).html() * 1;
		$(this).html(now + 1);
	});

	$("#chapter").contextmenu(function(event){
		var now = $(this).html() * 1;
		$(this).html(now - 1);
		return false;
	});
});

window.onload = function() {
	let link = document.createElement("link");
	link.href = "chumas.css";
	link.rel = "stylesheet"; 
	link.type = "text/css";
	frames['chumas'].document.head.appendChild(link);

	let link2 = document.createElement("link");
	link2.href = "rasi.css";
	link2.rel = "stylesheet"; 
	link2.type = "text/css"; 
	frames['rasi'].document.head.appendChild(link2);

/*	var iframeDoc = $("#chumas")[0].contentWindow.document;
	var $jqObject = $(iframeDoc).find("body");
	var iframeHtml = $jqObject.html();
	$jqObject.html(iframeHtml.replace(">-<", ">־<"));*/
}

