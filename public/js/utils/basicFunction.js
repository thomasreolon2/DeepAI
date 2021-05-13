// 2020-12-05 양승국 언어변경 
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

	
function Check_matplotlib_user_input(a, b) {
	if (a == 1 && b == 1) {
		DL_Gra = "graph_both_1";
	} else if (a == 1 || b == 1) {
		DL_Gra = "graph_or_1";
	} else {
		DL_Gra = 0;
	}
}


// 화면에 찍기 프린트
/*
function printc(x) {
	var savetext = $('#exeArea').val();
	$('#exeArea').val(savetext + x + '\n');
}
*/