let theme = "light";

function themeChange(){
    // 라이트 모드
    if(theme == "light"){
        $("#bg").attr('class', "bg-dark");
        $("#nav").attr('class', "navbar navbar-expand-lg navbar-light bg-dark");
        
        // blockly bg 색상
        $(".blocklySvg").css('background-color', "#1e1e1e");
        $(".blocklyToolboxDiv").css("background-color", "#292929");
        $(".blocklyTreeLabel").css("color", "#ffffff");
            
    
        // 콘솔창 색상
        $("#console").attr("class", "text-white bg-dark");
        $("#exeArea").attr('class', "form-control bg-dark");
        
        theme = "dark";
    
    // 다크 모드
    } else if(theme == "dark") {
        $("#bg").attr('class', "bg-light");
        $("#nav").attr('class', "navbar navbar-expand-lg navbar-light bg-light");

        $(".blocklySvg").css('background-color', "#ffffff");
        $(".blocklyToolboxDiv").css("background-color", "#DDDDDD")
        $(".blocklyTreeLabel").css("color", "#323232");

        // 콘솔창 색상
        $("#console").attr("class", "text-white bg-dark");
        $("#exeArea").attr('class', "form-control bg-light");

        theme = "light";
    }

}