Blockly.JavaScript['printc'] = function (block) {
    var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
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
    // TODO: Assemble JavaScript into code variable.
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
    // TODO: Assemble JavaScript into code variable.
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
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    return code;
  };
  Blockly.JavaScript['import_lib'] = function (block) {
    var dropdown_lib = block.getFieldValue('lib');
    var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable. 
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
  // TODO: Assemble JavaScript into code variable.
  var code="\n";
  return code;
};

Blockly.JavaScript['csv2'] = function (block) {
  var file = block.getFieldValue('csv_url');
  
  var code = "\n";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
// 사이킷런 MLP 블록 
Blockly.JavaScript['sklearn_mlp_classifier'] = function(block) { 
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
  return code;
};

Blockly.JavaScript['sklearn_mlp_regressor'] = function(block) { 
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['mlp_loss'] = function(block) {
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
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
  // TODO: Assemble JavaScript into code variable.
  var code =value_x_data+"=pyodide.pyimport('"+value_x_data+"');\n"+value_y_data+"=pyodide.pyimport('"+value_y_data+"');\n";
  return code;
};
Blockly.JavaScript['scikit_learn'] = function (block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_cate = block.getFieldValue('cate');
  var value_x = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('x'), Blockly.Variables.NAME_TYPE);
  var value_y = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('y'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code= value_model+"=pyodide.pyimport('"+value_model+"');\n"
  return code;
};

Blockly.JavaScript['vis_tree'] = function(block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_data = Blockly.JavaScript.valueToCode(block, 'x_data', Blockly.JavaScript.ORDER_ATOMIC);
  var y_data = Blockly.JavaScript.valueToCode(block, 'y_data', Blockly.JavaScript.ORDER_ATOMIC);
  var text_s = block.getFieldValue('s');
  var text_e = block.getFieldValue('e');
  // TODO: Assemble JavaScript into code variable.
  var code = "pyodide.runJavaScript(`\nimport io,base64\nimport matplotlib as mpl\nimport numpy as np\nimport matplotlib.pyplot as plt\ndef plot_decision_regions(X, y, model, title):\n\tresolution = 0.01\n\tmarkers = ('s', '^', 'o')\n\tcolors = ('red', 'blue', 'lightgreen')\n\tcmap = mpl.colors.ListedColormap(colors)\n\tx1_min, x1_max = X[:, 0].min() - 1, X[:, 0].max() + 1\n\tx2_min, x2_max = X[:, 1].min() - 1, X[:, 1].max() + 1\n\txx1, xx2 = np.meshgrid(np.arange(x1_min, x1_max, resolution),np.arange(x2_min, x2_max, resolution))\n\tZ = model.predict(np.array([xx1.ravel(), xx2.ravel()]).T).reshape(xx1.shape)\n\tplt.contour(xx1, xx2, Z, cmap=mpl.colors.ListedColormap(['k']))\n\tplt.contourf(xx1, xx2, Z, alpha=0.4, cmap=cmap)\n\tplt.xlim(xx1.min(), xx1.max())\n\tplt.ylim(xx2.min(), xx2.max())\n\tfor idx, cl in enumerate(np.unique(y)):\n\t\tplt.scatter(x=X[y == cl, 0], y=X[y == cl, 1], alpha=0.8,c=[cmap(idx)], marker=markers[idx], s=80, label=cl)\n\tplt.xlabel('x')\n\tplt.ylabel('y')\n\tplt.legend(loc='upper left')\n\tplt.title(title)\n\treturn Z\nfig = plt.figure()\nfig, ax_lst = plt.subplots(1,1, figsize=(8,6) , constrained_layout=True)\ndef vis_tree(x_data,y_data,s,e):\n\tX=x_data[:,[s,e]]\n\ty=y_data\n\tfrom sklearn.tree import DecisionTreeClassifier\n\ttree5 = DecisionTreeClassifier(criterion='entropy', max_depth=5, random_state=0).fit(X, y)\n\tplot_decision_regions(X, y, tree5, 'Depth 1')\n\tplt.show()\ny = "+y_data+"\nX = "+value_x_data+"\nvis_tree(X,y,"+text_s+","+text_e+")\nbuf = io.BytesIO()\nfig.savefig(buf, format='png')\nbuf.seek(0)\nimg_str = 'data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8')`);\ndocument.getElementById('pyplotfigure').src = pyodide.globals.img_str;";
  return code;
};

Blockly.JavaScript['sump'] = function (block) {
  var value_i = Blockly.JavaScript.valueToCode(block, 'i', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript['make_circles'] = function(block) {
  var code = '\n';
  return code;
};

Blockly.JavaScript['model_score'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
}


Blockly.JavaScript['input'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['fetch_openml'] = function (block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  return code;
};
Blockly.JavaScript['import_scikit'] = function (block) {
  var dropdown_metrics = block.getFieldValue('metrics');
  // TODO: Assemble JavaScript into code variable.
  var code="\n"

  return code;
};

Blockly.JavaScript['acc_score'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['AUC'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['AP'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['precision'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_aver = block.getFieldValue('aver');
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['mae'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['mse'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['median'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 신경망 MLPClassifier
Blockly.JavaScript['mlp_classifier'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['mlp_regressor'] = function (block) {
  var code = '\n';
  return code;
};
// 선형모델
Blockly.JavaScript['logistic_regression'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['logistic_regression_cv'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['perceptron'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['ridge_classifier'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['sgd_classifier'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['linear_regression'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['ridge'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['bayesian_ridge'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['sgd_regressor'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['import_mlp'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['import_linear'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['import_kmeans'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['model_fit'] = function (block) {
  var code = '\n';
  return code;
};
Blockly.JavaScript['kmeans_fit'] = function (block) {
  var code = '\n';
  return code;
};


Blockly.JavaScript['sivalidation'] = function(block) {
  var dropdown_vali = block.getFieldValue('vali');
  var value_em = Blockly.JavaScript.valueToCode(block, 'em', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var text_cv = block.getFieldValue('cv');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['import_sivalidation'] = function(block) {
  var dropdown_vali = block.getFieldValue('vali');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['kfold'] = function(block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var text_name = block.getFieldValue('NAME');
  var dropdown_shuffle = block.getFieldValue('shuffle');
  var text_seed = block.getFieldValue('seed');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
Blockly.JavaScript['stratifiedkfold'] = function(block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var text_name = block.getFieldValue('NAME');
  var dropdown_shuffle = block.getFieldValue('shuffle');
  var text_seed = block.getFieldValue('seed');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
Blockly.JavaScript['bernoullirbm'] = function(block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var text_hi = block.getFieldValue('hi');
  var text_lr = block.getFieldValue('lr');
  var text_batch = block.getFieldValue('batch');
  var text_epochs = block.getFieldValue('epochs');
  var text_seed = block.getFieldValue('seed');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
Blockly.JavaScript['import_scipy'] = function(block) {
  var dropdown_scipy = block.getFieldValue('scipy');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
Blockly.JavaScript['curve_fit'] = function(block) {
  var value_fun = Blockly.JavaScript.valueToCode(block, 'fun', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['univariatespline'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var text_s = block.getFieldValue('s');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['quad'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var text_s = block.getFieldValue('s');
  var text_e = block.getFieldValue('e');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['import_tree'] = function(block) {
  var dropdown_tree = block.getFieldValue('tree');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
Blockly.JavaScript['decision'] = function(block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var text_dept = block.getFieldValue('dept');
  var text_seed = block.getFieldValue('seed');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};
Blockly.JavaScript['coef'] = function(block) {
  var value_coef = Blockly.JavaScript.valueToCode(block, 'coef', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['intercept'] = function(block) {
  var value_intercept = Blockly.JavaScript.valueToCode(block, 'intercept', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['tree_text'] = function(block) {
  var value_trr = Blockly.JavaScript.valueToCode(block, 'trr', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 
'pyodide.runPython(`\nimport numpy as np\nfrom sklearn.tree import DecisionTreeClassifier\nestimator='+value_trr+'\nn_nodes = estimator.tree_.node_count\nchildren_left = estimator.tree_.children_left\nchildren_right = estimator.tree_.children_right\nfeature = estimator.tree_.feature\nthreshold = estimator.tree_.threshold\nnode_depth = np.zeros(shape=n_nodes, dtype=np.int64)\nis_leaves = np.zeros(shape=n_nodes, dtype=bool)\nstack = [(0, -1)]\nwhile len(stack) > 0:\n\tnode_id, parent_depth = stack.pop()\n\tnode_depth[node_id] = parent_depth + 1\n\tif (children_left[node_id] != children_right[node_id]):\n\t\tstack.append((children_left[node_id], parent_depth + 1))\n\t\tstack.append((children_right[node_id], parent_depth + 1))\n\telse:\n\t\tis_leaves[node_id] = True\nprint("이진 트리 구조에는 ", n_nodes, "개의 노드가 있으며 다음과 같은 트리 구조입니다.")\nfor i in range(n_nodes):\n\tif is_leaves[i]:\n\t\tprint("%snode=%s leaf node." % (node_depth[i] * "\t", i))\n\telse:\n\t\tprint("%snode=%s test node: go to node %s if X[:, %s] <= %s else to node %s."% (node_depth[i] * "\t", i, children_left[i], feature[i], threshold[i], children_right[i],))\nprint()`);\nn_nodes=pyodide.pyimport("n_nodes");\nnode_depth=pyodide.pyimport("node_depth");\nis_leaves=pyodide.pyimport("is_leaves");\nchildren_left=pyodide.pyimport("children_left");\nfeature=pyodide.pyimport("feature");\nthreshold=pyodide.pyimport("threshold");\nchildren_right=pyodide.pyimport("children_right");\nfor(var i=0; i<=n_nodes; i++){\n\tif(is_leaves[i]==true){\n\tprintc(node_depth[i]+"\t"+"node = "+ i +"leaf node.");\n}\n\telse{\n\t\tprintc(node_depth[i]+"\t test node: go to node"+children_left[i]+"if X[:,"+feature[i]+"] <="+threshold[i]+" else to node "+children_right[i]);\n\t}\n}';
  return code;
};


Blockly.JavaScript['np_dot'] = function(block) {
  var value_dot = Blockly.JavaScript.valueToCode(block, 'dot', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dot2 = Blockly.JavaScript.valueToCode(block, 'dot2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['py_for'] = function(block) {
  var value_item = Blockly.JavaScript.valueToCode(block, 'item', Blockly.JavaScript.ORDER_ATOMIC);
  var value_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_value = Blockly.JavaScript.statementToCode(block, 'value');
  // TODO: Assemble Python into code variable.
  var code = statements_value+'\n';
  return code;
};































////////////////////////////////프롤로그 임시
Blockly.JavaScript['prolog_list'] = function (block) {
  var code = '', statements_content, value_bar;
  var value_bar = Blockly.JavaScript.valueToCode(block, 'bar', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  //TODO: Assemble JavaScript into code variable.
  var elements = new Array();
  var split = statements_content.trim().split(',');

  for (var i = 0; i < split.length - 1; i++) {
    elements.push(split[i]);
  }
  if (value_bar === '') return '';
  code += value_bar + '('
  code += elements.join(',')
  code += ').';
  return code;
};

Blockly.JavaScript['constant'] = function (block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = text_name + ",";
  return code;
};
Blockly.JavaScript['info_block_statement'] = function (block) {
  return '';
};
Blockly.JavaScript['funktor'] = function (block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = text_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['rumpf'] = function (block) {
  var dropdown_seperate = block.getFieldValue('seperate');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var elements = new Array();
  var split = statements_name.trim().split(',');
  // TODO: Assemble JavaScript into code variable.
  for (var i = 0; i < split.length - 1; i++) {
    elements.push(split[i]);
  }
  var code = '', dropdown_seperate, statements_name;
  if (dropdown_seperate == 'and') {
    code = elements.join(',') + '.';
  }
  if (dropdown_seperate == 'or') {
    code = elements.join(';') + '.';
  }
  return code;
};
Blockly.JavaScript['Rule'] = function (block) {
  var statements_fact = Blockly.JavaScript.statementToCode(block, 'Fact');
  var statements_rumpf = Blockly.JavaScript.statementToCode(block, 'Rumpf');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_fact + ':-' + statements_rumpf;
  return code;
};
Blockly.JavaScript['abfrage'] = function (block) {
  var checkbox_active = block.getFieldValue('active');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (checkbox_active.toString() == 'TRUE') {
    code = statements_name;
  }

  return code;
};

Blockly.JavaScript['dic_menu'] = function (block) {
  var dropdown_dic = block.getFieldValue('dic');
  var value_dic1 = Blockly.JavaScript.valueToCode(block, 'dic1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dic2 = Blockly.JavaScript.valueToCode(block, 'dic2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dic3 = Blockly.JavaScript.valueToCode(block, 'dic3', Blockly.JavaScript.ORDER_ATOMIC);
  code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set'] = function (block) {
  var set = Blockly.JavaScript.valueToCode(block, 'SET', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '\n';
  // 뮤테이션을 이용하여 어러 값을 가져오도록 수정해야함
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 집합 종류
Blockly.JavaScript['set_menu'] = function (block) {
    var dropdown_set_menu = block.getFieldValue('set_menu');
    var value_set1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_set2 = Blockly.JavaScript.valueToCode(block, 'SET2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    code = '\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['separate'] = function (block) {
  var dropdown_separate = block.getFieldValue('separate');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = '';
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_separate == 'and') {
    code = '?' + statements_name;
  }
  if (dropdown_separate == 'or') {
    code = '-' + statements_name;
  }
  return code;
};
// prolog
Blockly.JavaScript['prolog_list'] = function (block) {
  var code = '', statements_content, value_bar;
  var value_bar = Blockly.JavaScript.valueToCode(block, 'bar', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  //TODO: Assemble JavaScript into code variable.
  var elements = new Array();
  var split = statements_content.trim().split(',');

  for (var i = 0; i < split.length - 1; i++) {
    elements.push(split[i]);
  }
  if (value_bar === '') return '';
  code += value_bar + '('
  code += elements.join(',')
  code += ').';
  return code;
};
Blockly.JavaScript['prolog_list_rule'] = function (block) {
  var code = '', statements_content, value_bar;
  var value_bar = Blockly.JavaScript.valueToCode(block, 'bar', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  //TODO: Assemble JavaScript into code variable.
  var elements = new Array();
  var split = statements_content.trim().split(',');

  for (var i = 0; i < split.length - 1; i++) {
    elements.push(split[i]);
  }
  if (value_bar === '') return '';
  code += value_bar + '('
  code += elements.join(',')
  code += ')';
  return code;
};
Blockly.JavaScript['constant'] = function (block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = text_name + ",";
  return code;
};
Blockly.JavaScript['info_block_statement'] = function (block) {
  return '';
};
Blockly.JavaScript['funktor'] = function (block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = text_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['rumpf'] = function (block) {
  var dropdown_seperate = block.getFieldValue('seperate');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var elements = new Array();
  var split = statements_name.trim().split('.');
  // TODO: Assemble JavaScript into code variable.
  for (var i = 0; i < split.length - 1; i++) {
    elements.push(split[i]);
  }
  var code = '', dropdown_seperate, statements_name;
  if (dropdown_seperate == 'and') {
    code = elements.join(',') + '.';
  }
  if (dropdown_seperate == 'or') {
    code = elements.join(';') + '.';
  }
  return code.trim();
};
Blockly.JavaScript['Rule'] = function (block) {
  var statements_fact = Blockly.JavaScript.statementToCode(block, 'Fact');
  var statements_rumpf = Blockly.JavaScript.statementToCode(block, 'Rumpf');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_fact + ':-' + statements_rumpf;
  return code.trim();
};
Blockly.JavaScript['abfrage'] = function (block) {
  var checkbox_active = block.getFieldValue('active');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (checkbox_active.toString() == 'TRUE') {
    code = statements_name;
  }

  return code.trim();
};
Blockly.JavaScript['separate'] = function (block) {
  var dropdown_separate = block.getFieldValue('separate');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code = '';
  // TODO: Assemble JavaScript into code variable.
  // if(dropdown_separate=='and'){
  //   code='?'+statements_name;
  // }
  // if(dropdown_separate=='or'){
  //   code='-'+statements_name;
  // }
  code = statements_name;
  return code.trim();
};