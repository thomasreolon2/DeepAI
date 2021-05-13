
$("#language").change(function () {
	var selectName = $(this).find(":selected").val();

	if (selectName == "kor") {
	$("#lan").remove();
	var script = document.createElement('script');
	script.id = 'lan';
	script.src = '/js/blockly/msg/js/ko.js'; // script url.
	document.body.appendChild(script);
	}
	else if (selectName == "eng") {
	$("#lan").remove();
	var script = document.createElement('script');
	script.id = 'lan';
	script.src = '/js/blockly/msg/js/en.js'; // script url.
	document.body.appendChild(script);
	}  
});