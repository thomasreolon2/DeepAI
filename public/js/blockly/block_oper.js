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
                "//", "//"
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


// 내장함수 - 숫자
Blockly.Blocks['convert_block'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Operation/O13-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([
            [
                "%{BKY_OPERATION_13_1}", "int("
            ],
            [
                "%{BKY_OPERATION_13_2}", "float("
            ],
            [
                "%{BKY_OPERATION_13_3}", "str("
            ],
            [
                "%{BKY_OPERATION_13_4}", "bool("
            ],
            
        ]), "NAME");
        this.appendValueInput("A").setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_MATH_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 내장함수 
Blockly.Blocks['built_in_function_num'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Operation/O13-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput()
        .appendField("");
        this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([            
            [
                "%{BKY_NUMSTR_INFUCTION_NUM_1}", "max"
            ],
            [
                "%{BKY_NUMSTR_INFUCTION_NUM_2}", "min"
            ],
            [
                "%{BKY_NUMSTR_INFUCTION_NUM_3}", "round"
            ],
            [
                "%{BKY_NUMSTR_INFUCTION_NUM_4}", "abs"
            ],
        ]), "NAME");
        this.appendValueInput("A").setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_MATH_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
