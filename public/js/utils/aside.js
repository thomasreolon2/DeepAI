// aside 열고 닫기 토글
function sidebar_toggle() {
	var duration = 300;
	var side = $('#sidebar');

	// side의 클래스를 open으로 토글함
	side.toggleClass('open');

	if (side.hasClass('open')) {
		side.stop(true).animate({
		right: '0px'
	}, duration);
	} else {
		side.stop(true).animate({
		right: '-900px'
		}, duration);
	};
};

// 지우기(상단지우기)
function csv_clear() {
	$("#graph1").remove(); 
	$("#csv_show").before("<div id='graph1' style=\"height:500px; width:900;\"><img id='pyplotfigure' /></div>");
  	// $('#csv_show').empty(); // 초기화
};

// 전체초기화
function sidebar_clear() {
	//$('#graph1').empty(); 기존 그래프 초기화
	$("#graph1").remove(); 
	$("#csv_show").before("<div id='graph1' style=\"height:500px; width:900;\"><img id='pyplotfigure' /></div>");
	$("#csv_show").remove(); 
	$("#graph1").after("<div id='csv_show'></div>");
};

	