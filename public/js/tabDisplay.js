
// 블럭만 보이기
function visibleBlock(){
    $('#codeDiv1').css({
        'display': "none"
    });
    $('#blocklyDiv').css({
        'display': "block",
        'height' : "65vh"
    });
    $('#codeDiv2').css({
        'width' : '100%'
    });
    // svg width 100%
    $('#codeDiv').attr('class', 'col-md-12'); // 콘솔 창 12
    $('.blocklySvg').attr('width', '100%'); // 블록 창 넓이 
    $('#blocklyDiv').attr('class', 'col-md-12'); // 블록 창 넓이 
    // Blockly 리사이즈
    Blockly.svgResize(demoWorkspace);
}

function visibleAll(){
    // 전부 보이기
        $('#blocklyDiv').css({
            'display': "block",
            'height' : "90vh"
        });
        $('#codeDiv1').css({
            'display': "block"
        });
        $('#codeDiv2').css({
            'display': "block"
        });
        $('#blocklyDiv').attr('class', 'col-md-8');
        $('#codeDiv').attr('class', 'col-md-4');
        // Blockly 리사이즈
        Blockly.svgResize(demoWorkspace);
}

function visibleCode(){
    // 코드만 보이기
        $('#blocklyDiv').css({
            'display': "none"
        });
        $('#codeDiv1').css({
            'display': "block"
        });
        $('#codeDiv').attr('class', 'col-md-12');
}