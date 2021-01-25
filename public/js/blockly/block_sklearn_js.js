//////////////////////////////////////////////////////
//
// 2021.01. 사이킷런 재정리, 정지현
// 사이킷런 자바스크립트 코드
//
//////////////////////////////////////////////////////

// 사이킷런 라이브러리 임포트
Blockly.JavaScript['import_scikit_learn'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
};

//////////////////////////////////////////////////////
//
// 기본 - 모델 학습 및 평가
//
//////////////////////////////////////////////////////

// Fit
Blockly.JavaScript['model_fit'] = function (block) {
  var code = '\n';
  return code;
};

// Model Score
Blockly.JavaScript['model_score'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

// Model Predict
Blockly.JavaScript['model_predict'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var text_data = block.getFieldValue('data');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//////////////////////////////////////////////////////
//
// 데이터셋
//
//////////////////////////////////////////////////////

// Sklearn Dataset
Blockly.JavaScript['import_dataset'] = function (block) {
    var dropdown_dataset_name = block.getFieldValue('dataset_name');
    var value_x_data = Blockly.JavaScript.valueToCode(block, 'x_data', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y_data = Blockly.JavaScript.valueToCode(block, 'y_data', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_x_data + "=pyodide.pyimport('" + value_x_data + "');\n" + value_y_data + "=pyodide.pyimport('" + value_y_data + "');\n";
    return code;
};

// Sklearn Make Circlees Dataset
Blockly.JavaScript['make_circles'] = function (block) {
    var code = '\n';
    return code;
};

// Sklearn Load CSV
Blockly.JavaScript['csv3'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
}


//////////////////////////////////////////////////////
// 데이터 핸들링
//////////////////////////////////////////////////////

// Train Test Split
Blockly.JavaScript['train_test_split'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
}

// Label Encoder
Blockly.JavaScript['labelencoder'] = function (block) {
    var value_df = Blockly.JavaScript.valueToCode(block, 'df', Blockly.JavaScript.ORDER_ATOMIC);
    var text_column = block.getFieldValue('column');
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    return code;
};

// One-Hot Encoder
Blockly.JavaScript['onehotencoder'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
};

// K-Fold
Blockly.JavaScript['kfold'] = function (block) {
    var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
    var text_name = block.getFieldValue('NAME');
    var dropdown_shuffle = block.getFieldValue('shuffle');
    var text_seed = block.getFieldValue('seed');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
};

// Polynom. Features
Blockly.JavaScript['polynomialfeatures'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var interaction_only = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
};


//////////////////////////////////////////////////////
// 지도학습 - 예측
//////////////////////////////////////////////////////

// Linear Regression
Blockly.JavaScript['linear_regression'] = function (block) {
    var code = '\n';
    return code;
};

// SGD Regressor
Blockly.JavaScript['sgd_regressor'] = function (block) {
    var code = '\n';
    return code;
};

// Ridge Regressor
Blockly.JavaScript['ridge'] = function (block) {
    var code = '\n';
    return code;
};

// Bayesian Ridge Regressor
Blockly.JavaScript['bayesian_ridge'] = function (block) {
    var code = '\n';
    return code;
};

// Adaboost Regressor
Blockly.JavaScript['adaboostregressor'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME3', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
};

// Gradient Boostring Regressor 
Blockly.JavaScript['gradientboostingregressor'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
};

// Random Forest Regressor
Blockly.JavaScript['randomforestregressor'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME3', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

// KNN Regressor
Blockly.JavaScript['kneighborsregressor_function'] = function(block) {
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

  

// SVR
  Blockly.JavaScript['linearsvr'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };

// MLP Regressor
Blockly.JavaScript['sklearn_mlp_regressor'] = function(block) { 
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };

//////////////////////////////////////////////////////
//
// 지도 학습 - 분류
//
//////////////////////////////////////////////////////

// Logistic Regression
Blockly.JavaScript['logistic_regression'] = function (block) {
    var code = '\n';
    return code;
  };

// Logistic Regression CV
Blockly.JavaScript['logistic_regression_cv'] = function (block) {
    var code = '\n';
    return code;
  };

// Ridge Classifier
Blockly.JavaScript['ridge_classifier'] = function (block) {
    var code = '\n';
    return code;
  };

// SGD Classifier
Blockly.JavaScript['sgd_classifier'] = function (block) {
    var code = '\n';
    return code;
  };

// Perceptron
Blockly.JavaScript['perceptron'] = function (block) {
    var code = '\n';
    return code;
  };

// Decision Tree Classifier
Blockly.JavaScript['decision'] = function(block) {
    var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
    var text_dept = block.getFieldValue('dept');
    var text_seed = block.getFieldValue('seed');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

// Adaboost Classifier
Blockly.JavaScript['adaboostclassifier'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME3', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

// Gradient Boosting Classifier
Blockly.JavaScript['gradientboostingclassifier'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME2ㄴ', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

// Random Forest Classifier
Blockly.JavaScript['randomforestclassifier'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME3', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

   // KNN Classifier
 Blockly.JavaScript['kneighborsclassifier_function'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};


// SVC

Blockly.JavaScript['linearsvc'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// MLP Classifier
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

//////////////////////////////////////////////////////
//
// 비지도 학습
//
//////////////////////////////////////////////////////

// K-Means
Blockly.JavaScript['k_means'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
}

//dbscan
Blockly.JavaScript['dbscan'] = function(block) {
  var value_dbscan_val = Blockly.JavaScript.valueToCode(block, 'DBSCAN_val', Blockly.JavaScript.ORDER_ATOMIC);
  var text_dbscan_eps = block.getFieldValue('DBSCAN_EPS');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

//IsolationForest
Blockly.JavaScript['isolation_forest'] = function(block) {
  var value_isolation_forest_val = Blockly.JavaScript.valueToCode(block, 'Isolation_Forest_val', Blockly.JavaScript.ORDER_ATOMIC);
  var text_isolation_forest_estimators = block.getFieldValue('Isolation_Forest_estimators');
  var text_isolation_forest_connection = block.getFieldValue('Isolation_Forest_connection');
  var text_isolation_forest_randomstate = block.getFieldValue('Isolation_Forest_randomstate');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

//////////////////////////////////////////////////////
//
// 평가 지표
//
//////////////////////////////////////////////////////

// Accuracy Score
Blockly.JavaScript['acc_score'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Mean Absolute Error
Blockly.JavaScript['mae'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Mean Squared Error
Blockly.JavaScript['mse'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// AUC Curve
Blockly.JavaScript['AUC'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// AP

Blockly.JavaScript['AP'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Precision
Blockly.JavaScript['precision'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_aver = block.getFieldValue('aver');
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// Median Squared Error

Blockly.JavaScript['median'] = function(block) {
  var value_yt = Blockly.JavaScript.valueToCode(block, 'yt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yp = Blockly.JavaScript.valueToCode(block, 'yp', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Cross Val.
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

//classification_report
Blockly.JavaScript['classification_report'] = function(block) {
  var value_classification_report_y_true = Blockly.JavaScript.valueToCode(block, 'classification_report_Y_true', Blockly.JavaScript.ORDER_ATOMIC);
  var value_classification_report_y_pred = Blockly.JavaScript.valueToCode(block, 'classification_report_y_pred', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//////////////////////////////////////////////////////
//
// 기타 블록
//
//////////////////////////////////////////////////////

// 계수 추출
Blockly.JavaScript['coef'] = function(block) {
  var value_coef = Blockly.JavaScript.valueToCode(block, 'coef', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 절편 추출
Blockly.JavaScript['intercept'] = function(block) {
  var value_intercept = Blockly.JavaScript.valueToCode(block, 'intercept', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// K-Means Inertia
Blockly.JavaScript['k_means_inertia'] = function(block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// K-Means Centroid
Blockly.JavaScript['k_means_centroid'] = function(block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// MLP Loss
Blockly.JavaScript['mlp_loss'] = function(block) {
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//////////////////////////////////////////////////////
//
// 기타 블록 - 남은 블록
//
//////////////////////////////////////////////////////

// OpenML
Blockly.JavaScript['fetch_openml'] = function (block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code="\n"
  return code;
};

//KNeighborsTransformer 블록 함수
Blockly.JavaScript['kneighborstransformer_function'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//kneighbors_graph 블록 함수

Blockly.JavaScript['kneighbors_graph_function'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_name1 = block.getFieldValue('NAME1');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// 결정트리 그래프
Blockly.JavaScript['tree_text'] = function(block) {
  var value_trr = Blockly.JavaScript.valueToCode(block, 'trr', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 
'pyodide.runPython(`\nimport numpy as np\nfrom sklearn.tree import DecisionTreeClassifier\nestimator='+value_trr+'\nn_nodes = estimator.tree_.node_count\nchildren_left = estimator.tree_.children_left\nchildren_right = estimator.tree_.children_right\nfeature = estimator.tree_.feature\nthreshold = estimator.tree_.threshold\nnode_depth = np.zeros(shape=n_nodes, dtype=np.int64)\nis_leaves = np.zeros(shape=n_nodes, dtype=bool)\nstack = [(0, -1)]\nwhile len(stack) > 0:\n\tnode_id, parent_depth = stack.pop()\n\tnode_depth[node_id] = parent_depth + 1\n\tif (children_left[node_id] != children_right[node_id]):\n\t\tstack.append((children_left[node_id], parent_depth + 1))\n\t\tstack.append((children_right[node_id], parent_depth + 1))\n\telse:\n\t\tis_leaves[node_id] = True\nprint("이진 트리 구조에는 ", n_nodes, "개의 노드가 있으며 다음과 같은 트리 구조입니다.")\nfor i in range(n_nodes):\n\tif is_leaves[i]:\n\t\tprint("%snode=%s leaf node." % (node_depth[i] * "\t", i))\n\telse:\n\t\tprint("%snode=%s test node: go to node %s if X[:, %s] <= %s else to node %s."% (node_depth[i] * "\t", i, children_left[i], feature[i], threshold[i], children_right[i],))\nprint()`);\nn_nodes=pyodide.pyimport("n_nodes");\nnode_depth=pyodide.pyimport("node_depth");\nis_leaves=pyodide.pyimport("is_leaves");\nchildren_left=pyodide.pyimport("children_left");\nfeature=pyodide.pyimport("feature");\nthreshold=pyodide.pyimport("threshold");\nchildren_right=pyodide.pyimport("children_right");\nfor(var i=0; i<=n_nodes; i++){\n\tif(is_leaves[i]==true){\n\tprintc(node_depth[i]+"\t"+"node = "+ i +"leaf node.");\n}\n\telse{\n\t\tprintc(node_depth[i]+"\t test node: go to node"+children_left[i]+"if X[:,"+feature[i]+"] <="+threshold[i]+" else to node "+children_right[i]);\n\t}\n}';
  return code;
};

// DBSCAN Fit and Predict
Blockly.JavaScript['metrics_fit_predict'] = function(block) {
  var value_metrics_fit_predict_val = Blockly.JavaScript.valueToCode(block, 'metrics_fit_predict_val', Blockly.JavaScript.ORDER_ATOMIC);
  var value_metrics_fit_predict_xdata = Blockly.JavaScript.valueToCode(block, 'metrics_fit_predict_Xdata', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Bernoulli RBM
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

