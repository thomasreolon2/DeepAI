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
              "카메라", "CAMERA"
          ],
          [
              "ABC", "getvalues"
          ],
          [
              "키,값쌍얻기", "items"
          ],
          [
              "키,값쌍모두지우기", "clear"
          ]
      ]), "DATA");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
