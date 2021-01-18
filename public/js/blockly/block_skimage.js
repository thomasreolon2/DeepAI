// 2021.01.13 사이킷이미지 import 남지원
Blockly.Blocks['import_skimage'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트]skimage");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(255);
      this.setTooltip("");
      this.setHelpUrl("");
    }
};

// 2021.01.13 이미지 사용 (남지원)
Blockly.Blocks['skimage_data'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[이미지사용]")
      .appendField(new Blockly.FieldDropdown([
        [
          "우주인", "astronaut"  
        ],
        
        [
          "binary_blobs", "binary_blobs"
        ],
        // [
        //   "벽돌", "brick"
        // ],
        // [
        //   "색상원", "colorwheel"
        // ],
        [
          "카메라", "camera"
        ],
        // [
        //   "고양이", "cat"
        // ],
        [
          "체스판", "checkerboard"
        ],
        [
          "clock", "clock"
        ],
        [
          "커피", "coffee"
        ],
        [
          "동전", "coins"
        ],
        // [
        //   "독수리", "eagle"
        // ],
        // [
        //   "잔디", "grass"
        // ],
        // [
        //   "자갈", "gravel"
        // ],
        [
          "말", "horse"
        ],
        [
          "로고", "logo"
        ],
        [
          "책(페이지)", "page"
        ],
        [
          "글자", "text"
        ],
        [
          "로켓", "rocket"
        ]
      ]), "DATA");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


// 2021.01.17 rgb2gray  남지원
Blockly.Blocks['rgb2gray'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("rgb2gray(");
    this.appendValueInput("VAR")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 2021-01-18 임포트 블록 양승국
Blockly.Blocks['ski_class'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[임포트]skimage.");
      this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [
          "data as data", "data as data"  
        ],
        [
          "color as color", "color as color"
        ],
        [
          "filters as filters", "filters as filters"
        ],
        [
          "draw as draw", "draw as draw"
        ],
        [
          "feature as feature", "feature as feature"
        ],
        [
          "morphology as morphology", "morphology as morphology"
        ],
        [
          "transform as transform", "transform as transform"
        ],
        [
          "util as util", "util as util"
        ],
        [
          "exposure as exposure", "exposure as exposure"
        ],
        [
          "segmetation as segmetation", "segmetation as segmetation"
        ],
        [
          "img_as_float as img_as_float", "img_as_float as img_as_float"
        ],
        [
          "measure as measure", "measure as measure"
        ]
      ]), "DATA");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};