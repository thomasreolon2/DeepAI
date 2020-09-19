Blockly.JavaScript['printc'] = function (block) {
    var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'printc(' + value_content + ')\n';
    return code;
  };
  Blockly.JavaScript['nj_array'] = function (block) {
    var text_array = block.getFieldValue('array');
    // TODO: Assemble JavaScript into code variable.
    var code = 'nj.array([' + text_array + '])';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['forp'] = function(block) {
    var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
    var value_range = Blockly.JavaScript.valueToCode(block, 'range', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_for = Blockly.JavaScript.statementToCode(block, 'for');
    // TODO: Assemble Python into code variable.
    var code = statements_for;
    return code;
  };
  Blockly.JavaScript['lrgraph'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
    var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'LRgraph(' + value_x + ',' + value_y + ',' + value_w + ',' + value_b + ');';
    return code;
  };
  Blockly.JavaScript['logicgraph'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
    var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'Logisticgraph(' + value_x + ',' + value_y + ',' + value_w + ',' + value_b + ');';
    return code;
  };
  Blockly.JavaScript['csv_library'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'pan_lib_var', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    return code;
  };
  Blockly.JavaScript['labelencoder'] = function(block) {
    var value_df = Blockly.JavaScript.valueToCode(block, 'df', Blockly.JavaScript.ORDER_ATOMIC);
    var text_column = block.getFieldValue('column');
    // TODO: Assemble Python into code variable.
    var code = "\n";
    return code;
  };
  Blockly.JavaScript['import_lib'] = function (block) {
    var dropdown_lib = block.getFieldValue('lib');
    var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable. 
    var code = "\n";
    
    return code;
};
Blockly.JavaScript['model_predict'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var text_data = block.getFieldValue('data');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['scikit_learn'] = function (block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_cate = block.getFieldValue('cate');
  var value_x = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('x'), Blockly.Variables.NAME_TYPE);
  var value_y = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('y'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code="\n";
  return code;
};


// 사이킷런 MLP 블록 
Blockly.JavaScript['sklearn_mlp'] = function(block) { 
  var text_sklearn_mlp_hidden_size = block.getFieldValue('sklearn_MLP_hidden_size');
  var dropdown_sklearn_mlp_activation__option = block.getFieldValue('sklearn_MLP_activation _Option');
  var dropdown_sklearn_mlp_optimizer_option = block.getFieldValue('sklearn_MLP_Optimizer_Option');
  var text_sklearn_mlp_max_iter = block.getFieldValue('sklearn_MLP_Max iter');
  var text_sklearn_mlp_learning_rate = block.getFieldValue('sklearn_MLP_learning rate');
  var text_sklearn_mlp_random_state = block.getFieldValue('sklearn_MLP_random state');
  var value_sklearn_mlp_fit_x = Blockly.JavaScript.valueToCode(block, 'sklearn_mlp_fit_X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sklearn_mlp_fit_y = Blockly.JavaScript.valueToCode(block, 'sklearn_mlp_fit_Y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


  
//MLP fit
// Blockly.JavaScript['sklearn_mlp_fit'] = function(block) {
//   var value_sklearn_mlp_fit_lib_var = Blockly.JavaScript.valueToCode(block, 'sklearn_mlp_fit_lib_var', Blockly.JavaScript.ORDER_ATOMIC);
//   var value_sklearn_mlp_fit_x = Blockly.JavaScript.valueToCode(block, 'sklearn_mlp_fit_X', Blockly.JavaScript.ORDER_ATOMIC);
//   var value_sklearn_mlp_fit_y = Blockly.JavaScript.valueToCode(block, 'sklearn_mlp_fit_Y', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = '\n';
//   return code; 
// }; 
Blockly.JavaScript['import_dataset'] = function(block) {
  var dropdown_dataset_name = block.getFieldValue('dataset_name');
  var value_x_data = Blockly.JavaScript.valueToCode(block, 'x_data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_data = Blockly.JavaScript.valueToCode(block, 'y_data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =value_x_data+"=pyodide.pyimport('"+value_x_data+"');\n"+value_y_data+"=pyodide.pyimport('"+value_y_data+"');\n";
  return code;
};
Blockly.JavaScript['scikit_learn'] = function (block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_cate = block.getFieldValue('cate');
  var value_x = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('x'), Blockly.Variables.NAME_TYPE);
  var value_y = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('y'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code= value_model+"=pyodide.pyimport('"+value_model+"');\n"
  return code;
};

Blockly.JavaScript['vis_tree'] = function(block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_data = Blockly.JavaScript.valueToCode(block, 'x_data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_data = Blockly.JavaScript.valueToCode(block, 'y_data', Blockly.JavaScript.ORDER_ATOMIC);
  var text_s = block.getFieldValue('s');
  var text_e = block.getFieldValue('e');
  // TODO: Assemble JavaScript into code variable.
  var code = "pyodide.runPython(`\nimport io,base64\nimport matplotlib as mpl\nimport numpy as np\nimport matplotlib.pyplot as plt\ndef plot_decision_regions(X, y, model, title):\n\tresolution = 0.01\n\tmarkers = ('s', '^', 'o')\n\tcolors = ('red', 'blue', 'lightgreen')\n\tcmap = mpl.colors.ListedColormap(colors)\n\tx1_min, x1_max = X[:, 0].min() - 1, X[:, 0].max() + 1\n\tx2_min, x2_max = X[:, 1].min() - 1, X[:, 1].max() + 1\n\txx1, xx2 = np.meshgrid(np.arange(x1_min, x1_max, resolution),np.arange(x2_min, x2_max, resolution))\n\tZ = model.predict(np.array([xx1.ravel(), xx2.ravel()]).T).reshape(xx1.shape)\n\tplt.contour(xx1, xx2, Z, cmap=mpl.colors.ListedColormap(['k']))\n\tplt.contourf(xx1, xx2, Z, alpha=0.4, cmap=cmap)\n\tplt.xlim(xx1.min(), xx1.max())\n\tplt.ylim(xx2.min(), xx2.max())\n\tfor idx, cl in enumerate(np.unique(y)):\n\t\tplt.scatter(x=X[y == cl, 0], y=X[y == cl, 1], alpha=0.8,c=[cmap(idx)], marker=markers[idx], s=80, label=cl)\n\tplt.xlabel('x')\n\tplt.ylabel('y')\n\tplt.legend(loc='upper left')\n\tplt.title(title)\n\treturn Z\nfig = plt.figure()\nfig, ax_lst = plt.subplots(1,1, figsize=(8,6) , constrained_layout=True)\ndef vis_tree(x_data,y_data,s,e):\n\tX=x_data[:,[s,e]]\n\ty=y_data\n\tfrom sklearn.tree import DecisionTreeClassifier\n\ttree5 = DecisionTreeClassifier(criterion='entropy', max_depth=5, random_state=0).fit(X, y)\n\tplot_decision_regions(X, y, tree5, 'Depth 1')\n\tplt.show()\ny = "+value_y_data+"\nX = "+value_x_data+"\nvis_tree(X,y,"+text_s+","+text_e+")\nbuf = io.BytesIO()\nfig.savefig(buf, format='png')\nbuf.seek(0)\nimg_str = 'data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8')`);\ndocument.getElementById('pyplotfigure').src = pyodide.globals.img_str;";
  return code;
};
Blockly.JavaScript['input'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['csv3'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
}

Blockly.JavaScript['train_test_split'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
}

Blockly.JavaScript['k_means'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
}

Blockly.JavaScript['model_score'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
}


