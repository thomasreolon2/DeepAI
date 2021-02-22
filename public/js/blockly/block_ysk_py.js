////////////////////////////////////////////////////////////////////
// 2020-12-26 
////////////////////////////////////////////////////////////////////

//df_ap
Blockly.Python['df_ap'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = variable_list + dropdown_dic + value_name + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};



/////////////////////////////////////////////////
//df_agg
Blockly.Python['df_agg'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ".agg( " + value_name + " )";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  



Blockly.Python['try_except1'] = function(q) {
  var statements_try = Blockly.Python.statementToCode(q, 'TRY');
  var value_except1 = Blockly.Python.valueToCode(q, 'EXCEPT1', Blockly.Python.ORDER_ATOMIC);
  var statements_except2 = Blockly.Python.statementToCode(q, 'EXCEPT2');
  var b = 0, c = "try : \n" + statements_try + "except " + value_except1 + " :\n" + statements_except2; ;
  // var b = Array(a.itemCount_)
  Blockly.Python.STATEMENT_PREFIX &&
    (c += Blockly.Python.injectId(Blockly.Python.STATEMENT_PREFIX, q));
  // TODO: Assemble Python into code variable.
  while (q.getInput("ADD" + b)) {
    var d = q.getFieldValue('DROP' + b);
    var e = Blockly.Python.statementToCode(q, "ADD" + b) || Blockly.Python.PASS;

    c += "except " + d + " :\n" + e;
    ++b;
  };
  // for (d = 0; d < q.itemCount_; d++){
  //   var e = Blockly.Python.statementToCode(a, "ADD" + d) || Blockly.Python.PASS;
  //   Blockly.Python.STATEMENT_SUFFIX &&
  //     (e =
  //       Blockly.Python.prefixLines(
  //         Blockly.Python.injectId(Blockly.Python.STATEMENT_SUFFIX, q),
  //         Blockly.Python.INDENT
  //       ) + e);
  //       c += "except " + ":\n" + e;
  // };
  return c;
};

//if문
Blockly.Python.m1 = function (a) {
  var b = 0,
    c = "";
  Blockly.Python.STATEMENT_PREFIX &&
    (c += Blockly.Python.injectId(Blockly.Python.STATEMENT_PREFIX, a));
  do {
    var d =
      Blockly.Python.valueToCode(a, "IF" + b, Blockly.Python.ORDER_NONE) ||
      "False";
    var e = Blockly.Python.statementToCode(a, "DO" + b) || Blockly.Python.PASS;
    Blockly.Python.STATEMENT_SUFFIX &&
      (e =
        Blockly.Python.prefixLines(
          Blockly.Python.injectId(Blockly.Python.STATEMENT_SUFFIX, a),
          Blockly.Python.INDENT
        ) + e);
    c += (0 == b ? "if " : "elif ") + d + ":\n" + e;
    ++b;
  } while (a.getInput("IF" + b));
  if (a.getInput("ELSE") || Blockly.Python.STATEMENT_SUFFIX)
    (e = Blockly.Python.statementToCode(a, "ELSE") || Blockly.Python.PASS),
      Blockly.Python.STATEMENT_SUFFIX &&
        (e =
          Blockly.Python.prefixLines(
            Blockly.Python.injectId(Blockly.Python.STATEMENT_SUFFIX, a),
            Blockly.Python.INDENT
          ) + e),
      (c += "else:\n" + e);
  return c;
};


