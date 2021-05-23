// 각 카테고리 ID
$('div[aria-posinset="13"]').hide(); 	//	num
$('div[aria-posinset="14"]').hide(); 	//	pan
$('div[aria-posinset="15"]').hide(); 	//  mat
$('div[aria-posinset="16"]').hide(); 	//	Scipy
$('div[aria-posinset="17"]').hide(); 	//	Scikit-Image
$('div[aria-posinset="18"]').hide();	//	Scikit-learn

// 로딩창 생성
function showLibLoading() {
    $("#loading_image1").show();
    $("#runButton1").css({
        'display': "none"
    });
    $("#loading_image2").show(); // 로딩 끝나면 로딩 창 없앰 
    $("#runButton2").css({
        'display': "none"
    });
}

// 로딩창 제거
function hideLibLoading() {
    $("#loading_image1").hide(); // 로딩 끝나면 로딩 창 없앰 
	$("#runButton1").css({
		'display': "block"
	});
    $("#loading_image2").hide(); // 로딩 끝나면 로딩 창 없앰 
	$("#runButton2").css({
		'display': "inline"
	});
}

 /////////////////////////////////
 // 라이브러리 추가 버튼 동작
 /////////////////////////////////

 // 데이터 사이언스


 // $("#block_type_btn").on("click", function () {
 //   visibleAll();
 //   $(".btn-group .codebBtn").eq(2).remove()
 //   if (projectType == 0) {
 //     projectType = 1
 //   }
 //   $(".ui.modal").modal("hide");
 // })
 // $("#code_type_btn").on("click", function () {
 //   visibleCode();
 //   $(".btn-group").remove()
 //   if (projectType == 0) {
 //     projectType = 2
 //   }
 //   $(".ui.modal").modal("hide");
 // })

$("#ds_import_btn").on("click", function () {
	showLibLoading();

	$("#ds_import_btn").removeClass("blue").addClass("green");
	$("#ds_import_btn").text("추가됨");

	pyodide.loadPackage(['pandas', 'matplotlib', 'numpy']).then(() => {
		flagMatplotlibImport = 1;
		$('div[aria-posinset="13"]').show();
		$('div[aria-posinset="14"]').show();
		$('div[aria-posinset="15"]').show();
		hideLibLoading();
	})
});

// 머신러닝
$("#ml_import_btn").on("click", function () {
	showLibLoading();

	$("#ml_import_btn").removeClass("blue").addClass("green");
	$("#ml_import_btn").text("추가됨");
	console.time("시간 측정");
	pyodide.loadPackage(['scipy', 'scikit-learn']).then(() => {
		$('div[aria-posinset="16"]').show();
		$('div[aria-posinset="18"]').show();
		hideLibLoading();
		console.timeEnd("시간 측정");
	})
	
});

// 이미지 프로세싱
$("#image_processing_import_btn").on("click", function () {
	showLibLoading();

	$("#image_processing_import_btn").removeClass("blue").addClass("green");
	$("#image_processing_import_btn").text("추가됨");

	pyodide.loadPackage(['scikit-image']).then(() => {
		$('div[aria-posinset="17"]').show();
		hideLibLoading();
	})
});


// 라이브러리 모달창 열기 0505 전우진
$("#sidebar_add_libs").on("click", function () {
	$('.libraryDiv').modal("show");
});
// 라이브러리 모달창 닫기
$("#modal_close_btn").on("click", function () {
	$(".libraryDiv").modal("hide");
});