// 2021.01.13 사이킷이미지 import 남지원
Blockly.Blocks['import_skimage'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트]skimage");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
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
    this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
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
          "data", "data"  
        ],
        [
          "color", "color"
        ],
        [
          "filters", "filters"
        ],
        [
          "draw", "draw"
        ],
        [
          "feature", "feature"
        ],
        [
          "morphology", "morphology"
        ],
        [
          "transform", "transform"
        ],
        [
          "util", "util"
        ],
        [
          "exposure", "exposure"
        ],
        [
          "segmentation", "segmentation"
        ],
        // [
        //   "img_as_float", "img_as_float"
        // ], 2020-01-21-전우진 주석처리함
        [
          "measure", "measure"
        ]
      ]), "DATA");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// util
Blockly.Blocks['skimage_util'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("util.")
          .appendField(new Blockly.FieldDropdown([["invert","invert"],["img_as_ubyte","img_as_ubyte"],["view_as_blocks","view_as_blocks"]]),"DROP")
          .appendField("(");
      this.appendValueInput("INPUT")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


// skimage_measure
Blockly.Blocks['skimage_measure'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("measure.")
          .appendField(new Blockly.FieldDropdown([["find_contours","find_contours"],["subdivide_polygon","subdivide_polygon"],["approximate_polygon","approximate_polygon"]]),"DROP")
          .appendField("(");
      this.appendValueInput("INPUT")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['skimage_filters'] = {
  init: function () {
      this.appendDummyInput().appendField(Blockly.Msg.skimage_filters).appendField("filters.").appendField(new Blockly.FieldDropdown([
          [
            Blockly.Msg.skimage_filters_sobel, "sobel"
          ],
          [
            Blockly.Msg.skimage_filters_roberts, "roberts"
          ]
      ]), "collection");
      this.appendValueInput("d2").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['skimage_transform'] = {
  init: function () {
      this.appendDummyInput().appendField("transform.").appendField(new Blockly.FieldDropdown([
          [
              "hough_line", "hough_line"
          ],
          [
            "hough_circle", "hough_circle"
          ],
          [
            "hough_circle_peaks", "hough_circle_peaks"
          ],
          [
            "hough_line_peaks", "hough_line_peaks"
          ],
          [
            "probabilistic_hough_line", "probabilistic_hough_line"
          ]
      ]), "collection");
      this.appendValueInput("d2").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['skimage_img_as_float'] = {
  init: function () {
      this.appendDummyInput().appendField("img_as_float.").appendField(new Blockly.FieldDropdown([
          [
            "img_as_float", "img_as_float"
          ]
      ]), "collection");
      this.appendValueInput("d2").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};




Blockly.Blocks['skimage_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.skimage_color)
        .appendField("color.")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.skimage_color_rgb2gray,"color.rgb2gray"], 
        [Blockly.Msg.skimage_color_hed2rgb,"color.hed2rgb"], [Blockly.Msg.skimage_color_gray2rgb,"color.gray2rgb"], 
        [Blockly.Msg.skimage_color_rgb2hsv,"color.rgb2hsv"]]), "method")
        .appendField("(");
    this.appendValueInput("para")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['skimage_feature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("feature.")
        .appendField(new Blockly.FieldDropdown([["canny","feature.canny"]]), "method")
        .appendField("(");
    this.appendValueInput("para")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['skimage_morphology'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("morphology.")
        .appendField(new Blockly.FieldDropdown([["convex_hull_image","morphology.convex_hull_image"],["skeletonize","morphology.skeletonize"],["thin","morphology.thin"],["reconstruction","morphology.reconstruction"]]), "method")
        .appendField("(");
    this.appendValueInput("para")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['skimage_util_shape'] = {
  init: function() {
      this.appendValueInput("para")
          .appendField("util.view_as_blocks")
          .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["reshape","reshape"],["shape","shape"]]), "method")
        .appendField("(");
        this.appendValueInput("var")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};