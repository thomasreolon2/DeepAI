//////////////////////////////////////////////////////////////


// 블록코드 on,off
function separate_editor(){
	var pyEditor = $("#pyCodeEditor");
	var asyncEditor = $("#asyncCodeEditor");
	if ($('#toggle-two').prop('checked') === false) {
	//pyEditor.css("position", "relative");
	//pyEditor.slideUp("400");
	//asyncEditor.slideDown("400");
	asyncEditor.css("visibility", "visible");
	pyEditor.css("visibility", "hidden");
	} else if ($('#toggle-two').prop('checked') === true) {
	//pyEditor.css("position", "relative");
	//pyEditor.slideDown("400");
	//asyncEditor.slideUp("400");
	pyEditor.css("visibility", "visible");
	asyncEditor.css("visibility", "hidden");
	}

}
