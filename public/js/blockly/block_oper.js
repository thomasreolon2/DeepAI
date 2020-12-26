// 기초 연산
Blockly.Blocks['Oper'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Operation/O2-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("A").setCheck(null);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([
            [
                "+", "+"
            ],
            [
                "-", "-"
            ],
            [
                "*", "*"
            ],
            [
                "/", "/"
            ],
            [
                "%", "%"
            ],
            [
                "=", "="
            ],
            [
                "**", "**"
            ]
        ]), "NAME");
        this.appendValueInput("B").setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_MATH_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};