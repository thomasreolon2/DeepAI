// Linear Regression
Blockly.JavaScript['np_array'] = function (block) {
  var value_lst = Blockly.JavaScript.valueToCode(block, 'lst', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'np.array(' + value_lst + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sequential'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'tf.keras.Sequential()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dense'] = function (block) {
  var value_model_name = Blockly.JavaScript.valueToCode(block, 'model_name', Blockly.JavaScript.ORDER_ATOMIC);
  var text_shape = block.getFieldValue('input_shape');
  var text_units = block.getFieldValue('units');
  var dropdown_activation = block.getFieldValue('activation');
  // TODO: Assemble Python into code variable.
  var code = value_model_name + '.add(tf.keras.layers.Dense(input_dim=' + text_shape + ', units=' + text_units + ', activation=' + dropdown_activation + '))\n';
  return code;
};

Blockly.JavaScript['compile'] = function (block) {
  var value_model_name = Blockly.JavaScript.valueToCode(block, 'model_name', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_optimizer = block.getFieldValue('optimizer');
  var dropdown_loss = block.getFieldValue('loss');
  var dropdown_metrics = block.getFieldValue('metrics');
  // TODO: Assemble Python into code variable.
  var code = '\n' + value_model_name + '.compile(optimizer="' + dropdown_optimizer + '", loss="' + dropdown_loss + '", metrics=[' + dropdown_metrics + '])\n';
  return code;
};

Blockly.JavaScript['fit'] = function (block) {
  var value_model_name = Blockly.JavaScript.valueToCode(block, 'model_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_train = Blockly.JavaScript.valueToCode(block, 'x_train', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_train = Blockly.JavaScript.valueToCode(block, 'y_train', Blockly.JavaScript.ORDER_ATOMIC);
  var text_batch_size = block.getFieldValue('batch_size');
  var text_epochs = block.getFieldValue('epochs');
  // TODO: Assemble Python into code variable.
  var code = value_model_name + '.fit(' + value_x_train + ', ' + value_y_train + ', batch_size=' + text_batch_size + ', epochs=' + text_epochs + ', verbose=1)\n';
  return code;
};

Blockly.JavaScript['prediction'] = function (block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var text_preds = block.getFieldValue('preds');
  // TODO: Assemble Python into code variable.
  var code = 'pred = ' + value_model + '.predict([' + text_preds + '])';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

// Logistic Regression
Blockly.JavaScript['load_x_data'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "load_breast_cancer()['data']";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['load_y_data'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "load_breast_cancer()['target']";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['split_data'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var text_split_from = block.getFieldValue('split_from');
  var text_split_to = block.getFieldValue('split_to');
  // TODO: Assemble Python into code variable.
  var code = value_name + '[' + text_split_from + ':' + text_split_to + ']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['show_shape'] = function (block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'print(' + value_data + '.shape)';
  return code;
};

Blockly.JavaScript['evaluate'] = function (block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x_eval_data = Blockly.JavaScript.valueToCode(block, 'x_eval_data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_eval_data = Blockly.JavaScript.valueToCode(block, 'y_eval_data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_model + '.evaluate(' + value_x_eval_data + ', ' + value_y_eval_data + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['file_open'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'Tk().withdraw();\nfilename = askopenfilename()\n';
  return code;
};
/**
 * 2020-07-02
 * Lee Jin Hyung
 */

Blockly.JavaScript['readcsv'] = function (block) {
  var value_filename = Blockly.JavaScript.valueToCode(block, 'fileName', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dropdown = block.getFieldValue('dropdown');
  var value_option = Blockly.JavaScript.valueToCode(block, 'option', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "pd.read_csv(" + value_filename + "," + dropdown_dropdown + "" + value_option + ")\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['token'] = function (block) {
  var value_set = Blockly.JavaScript.valueToCode(block, 'set', Blockly.JavaScript.ORDER_ATOMIC);
  var value_file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "Tokenizer(" + value_set + "=" + value_file + ")\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['tokenfit'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ".fit_on_texts(" + value_name + ")\n";
  return code;
};
Blockly.JavaScript['tokenfit'] = function (block) {
  var value_set = Blockly.JavaScript.valueToCode(block, 'set', Blockly.JavaScript.ORDER_ATOMIC);
  var value_file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_set + ".fit_on_texts(" + value_file + ")\n";
  return code;
};
Blockly.JavaScript['tokensquences'] = function (block) {
  var value_token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
  var value_squence = Blockly.JavaScript.valueToCode(block, 'squence', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_token + ".texts_to_sequences(" + value_squence + ")\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['wordindex'] = function (block) {
  var value_token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_token + ".word_index\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['padsequences'] = function (block) {
  var value_sequences = Blockly.JavaScript.valueToCode(block, 'sequences', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "pad_sequences(" + value_sequences + "," + value_name + ")\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['separate'] = function (block) {
  var value_pandas = Blockly.JavaScript.valueToCode(block, 'pandas', Blockly.JavaScript.ORDER_ATOMIC);
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_pandas + "." + value_column + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['keras_embedding'] = function (block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  var value_out = Blockly.JavaScript.valueToCode(block, 'out', Blockly.JavaScript.ORDER_ATOMIC);
  var value_length = Blockly.JavaScript.valueToCode(block, 'length', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_model + ".add(tf.keras.layers.Embedding(input_dim=" + value_input + ", output_dim=" + value_out + ", input_length=" + value_length + "))\n";
  return code;
};
Blockly.JavaScript['keras_lstm'] = function (block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_model + ".add(tf.keras.layers.LSTM(units=" + value_input + "))\n";
  return code;
};
Blockly.JavaScript['keras_dropout'] = function (block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_model + ".add(tf.keras.layers.Dropout(" + value_input + "))\n";
  return code;
};


/**
 * 2020-07-02
 * Jo Cheon Woo
 */
Blockly.JavaScript['array_change'] = function (block) {
  var value_array_name = Blockly.JavaScript.valueToCode(block, 'array_name', Blockly.JavaScript.ORDER_ATOMIC);
  var text_num1 = block.getFieldValue('num1');
  var text_num2 = block.getFieldValue('num2');
  // TODO: Assemble Python into code variable.
  var code = value_array_name + ".reshape(" + text_num1 + "," + text_num2 + ")\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['onehotencoder'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "OneHotEncoder()\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['onehotencoder_fit'] = function (block) {
  var value_enc_name = Blockly.JavaScript.valueToCode(block, 'enc_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_enc_fit_name = Blockly.JavaScript.valueToCode(block, 'enc_fit_name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_enc_name + ".fit(" + value_enc_fit_name + ")\n";
  return code;
};

Blockly.JavaScript['enc_transform'] = function (block) {
  var value_enc_name = Blockly.JavaScript.valueToCode(block, 'enc_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data_name = Blockly.JavaScript.valueToCode(block, 'data_name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_enc_name + ".transform(" + value_data_name + ").toarray()\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['model_predict'] = function (block) {
  var value_model_name = Blockly.JavaScript.valueToCode(block, 'model_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_predict = Blockly.JavaScript.valueToCode(block, 'predict', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_model_name + ".predict(" + value_predict + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['enc_inverse'] = function (block) {
  var value_enc_name = Blockly.JavaScript.valueToCode(block, 'enc_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_predict = Blockly.JavaScript.valueToCode(block, 'predict', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_enc_name + ".inverse_transform(" + value_predict + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

////////////////////////////////////////////////////////////////////////////
//blockjas 선형회귀
////////////////////////////////////////////////////////////////////////////
Blockly.JavaScript['callback'] = function (block) {
  var dropdown_containerselect = block.getFieldValue('containerSelect');
  var dropdown_metricsselect = block.getFieldValue('metricsSelect');
  // TODO: Assemble JavaScript into code variable.
  var code = "tfvis.show.fitCallbacks(" + dropdown_containerselect + "," + dropdown_metricsselect + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sequential'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "tf.sequential()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['dense'] = function (block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var text_unit = block.getFieldValue('unit');
  var text_shape = block.getFieldValue('shape');
  // TODO: Assemble JavaScript into code variable.
  var code = value_model + ".add(tf.layers.dense({units:" + text_unit + ", inputShape:[" + text_shape + "]}));\n";
  return code;
};
Blockly.JavaScript['compile'] = function (block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_loss = block.getFieldValue('loss');
  var dropdown_optimizer = block.getFieldValue('optimizer');
  // TODO: Assemble JavaScript into code variable.
  var code = value_model + ".compile({loss: '" + dropdown_loss + "', optimizer: '" + dropdown_optimizer + "'});\n";
  return code;
};
Blockly.JavaScript['fit'] = function (block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ydata = Blockly.JavaScript.valueToCode(block, 'ydata', Blockly.JavaScript.ORDER_ATOMIC);
  var text_batch = block.getFieldValue('batch');
  var value_vdata = Blockly.JavaScript.valueToCode(block, 'Vdata', Blockly.JavaScript.ORDER_ATOMIC);
  var value_yvdata = Blockly.JavaScript.valueToCode(block, 'yVdata', Blockly.JavaScript.ORDER_ATOMIC);
  var text_epochs = block.getFieldValue('epochs');
  var dropdown_shuffle = block.getFieldValue('shuffle');
  var value_callback = Blockly.JavaScript.valueToCode(block, 'callback', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_model + ".fit(" + value_data + "," + value_ydata + ",{batchSize:" + text_batch + ",validationData: [" + value_vdata + "," + value_yvdata + "],epochs:" + text_epochs + ", shuffle:" + dropdown_shuffle + ", callbacks: " + value_callback + " }).then(() => {\n" +
    "saveModel(" + value_model + ");\n});";
  return code;
};
Blockly.JavaScript['predict'] = function (block) {
  var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
  var value_predictr = Blockly.JavaScript.valueToCode(block, 'predictr', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "async function runModel() {\n" + value_model + " = await tf.loadLayersModel('localstorage://my-model');\n"
    + "var pred = " + value_model + ".predict(" + value_predictr + ");\n" + "document.getElementById('exeArea').innerHTML = pred;\n}\nrunModel();";
  return code;
};

Blockly.JavaScript['list'] = function (block) {
  var text_list = block.getFieldValue('list');
  var text_shape = block.getFieldValue('shape');
  // TODO: Assemble JavaScript into code variable.
  var code = "tf.tensor([" + text_list + "], [" + text_shape + "])\n";
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['file_upload'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return 'file_upload test'
};
    ////////////////////////////////////////////////////////////////
    //mnist for js
    ///////////////////////////////////////////////////////////////
    Blockly.JavaScript['csv'] = function(block) {
      var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
      var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
      var text_label = block.getFieldValue('label');
      // TODO: Assemble JavaScript into code variable.
      var code =value_var+'= tf.data.csv('+value_name+', {columnConfigs: {'+text_label+': {isLabel: true}} });\n';
      return code;
    };
    Blockly.JavaScript['async'] = function(block) {
      var text_name = block.getFieldValue('NAME');
      var statements_async = Blockly.JavaScript.statementToCode(block, 'async');
      // TODO: Assemble JavaScript into code variable.
      var code = 'async function '+text_name+'() {\n'+statements_async+'\n};\n'+text_name+"().then(() => console.log('완료.'));\n";
      return code;
    };
    Blockly.JavaScript['data'] = function(block) {
      var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
      var value_csv = Blockly.JavaScript.valueToCode(block, 'csv', Blockly.JavaScript.ORDER_ATOMIC);
      var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
      var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
      var text_batch = block.getFieldValue('batch');
      // TODO: Assemble JavaScript into code variable.
      var code = value_var+'= '+value_csv+'.map(({ '+value_x+','+value_y+'}) => { return { '+value_x+': Object.values('+value_x+'),'+value_y+': Object.values('+value_y+') };}).batch('+text_batch+');\n';
      return code;
    };
    Blockly.JavaScript['add'] = function(block) {
      var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
      var value_unit = Blockly.JavaScript.valueToCode(block, 'unit', Blockly.JavaScript.ORDER_ATOMIC);
      var text_unit = block.getFieldValue('unit');
      var dropdown_activation = block.getFieldValue('activation');
      // TODO: Assemble JavaScript into code variable.
      var code = value_model+'.add(tf.layers.dense({inputShape:'+value_unit+',units:'+text_unit+',activation:'+dropdown_activation+'}));\n';
      return code;
    };
    Blockly.JavaScript['addn'] = function(block) {
      var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
      var text_unit = block.getFieldValue('unit');
      var dropdown_activation = block.getFieldValue('activation');
      // TODO: Assemble JavaScript into code variable.
      var code =  value_model+'.add(tf.layers.dense({units:'+text_unit+',activation:'+dropdown_activation+'}));\n';
      return code;
    };
    Blockly.JavaScript['compile'] = function(block) {
      var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
      var dropdown_optimizer = block.getFieldValue('optimizer');
      var dropdown_loss = block.getFieldValue('loss');
      var text_metrics = block.getFieldValue('metrics');
      // TODO: Assemble JavaScript into code variable.
      var code = value_model+'.compile({optimizer: '+dropdown_optimizer+',loss: '+dropdown_loss+',metrics: ['+text_metrics+']});\n';
      return code;
    };
    Blockly.JavaScript['fit'] = function(block) {
      var value_model = Blockly.JavaScript.valueToCode(block, 'model', Blockly.JavaScript.ORDER_ATOMIC);
      var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
      var text_epochs = block.getFieldValue('epochs');
      var value_valdata = Blockly.JavaScript.valueToCode(block, 'valdata', Blockly.JavaScript.ORDER_ATOMIC);
      var value_callback = Blockly.JavaScript.valueToCode(block, 'callback', Blockly.JavaScript.ORDER_ATOMIC);
      // TODO: Assemble JavaScript into code variable.
      var code = 'return '+value_model+'.fitDataset('+value_data+', {\nepochs: '+text_epochs+',\nvalidationData:'+value_valdata+',\n callbacks:'+value_callback+'});';
      return code;
    };
    Blockly.JavaScript['console'] = function(block) {
      var value_console = Blockly.JavaScript.valueToCode(block, 'console', Blockly.JavaScript.ORDER_ATOMIC);
      // TODO: Assemble JavaScript into code variable.
      var code = 'console.log('+value_console+');\n';
      return code;
    };
    Blockly.JavaScript['feturelenght'] = function(block) {
      var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
      var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
      // TODO: Assemble JavaScript into code variable.
      var code = value_var+'= (await '+value_data+'.columnNames()).length - 1;\n';
      return code;
    };
    Blockly.JavaScript['fitconsole'] = function(block) {
      // TODO: Assemble JavaScript into code variable.
      var code = '{\nonEpochEnd: async (epoch, logs) => {console.log("Epoch : " + epoch + 1, "| Loss: " + logs.loss + "| Acc: " + logs.acc ,\n"| Val Loss: " + logs.val_loss + "| Val Acc: " + logs.val_acc);\n},\nonBatchEnd: async (batch, logs) => {\nconsole.log("Batch: "+batch, "| Loss: " + logs.loss, "| Acc:" + logs.acc);\n}}});\n';
      return code;
    };
    Blockly.JavaScript['predict'] = function(block) {
      var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
      // TODO: Assemble JavaScript into code variable.
      var code = value_name+"= await tf.loadLayersModel('/models/model.json');\nconsole.log("+value_name+");\nconst prediction = "+value_name+".predict(tf.tensor([alphaPixel])).argMax([-1]);\nvar value = prediction.dataSync();\nvar arr = Array.from(value);\ndocument.getElementById('exeArea').innerHTML = arr[0];\nconsole.log(arr);";
      return code;
    };
    Blockly.JavaScript['covid'] = function(block) {
      var text_age = block.getFieldValue('age');
      var text_sex = block.getFieldValue('sex');
      var text_tem = block.getFieldValue('tem');
      var text_ca = block.getFieldValue('ca'); 
      var text_mo = block.getFieldValue('mo');
      var text_mu = block.getFieldValue('mu');
      var text_da = block.getFieldValue('da');
      var text_si = block.getFieldValue('si');
      var text_pe = block.getFieldValue('pe');
      var text_my = block.getFieldValue('my');
      var text_go = block.getFieldValue('go');
      var text_sin = block.getFieldValue('sin');
      var text_sik = block.getFieldValue('sik');
      var text_huk = block.getFieldValue('huk');
      // TODO: Assemble JavaScript into code variable.
      var code ='const prediction = model.predict(tf.tensor([[23, 0, 36.8, 1, 1, 0, 1, 1, 1,1, 1, 0, 1, 0, 0, 1, 0, 0]]))\nvar value = prediction.dataSync();\nvar arr = Array.from(value);\ndocument.getElementById("exeArea").innerHTML = arr[0]*100+"% 확률로 코로나 의심환자입니다."';
      return code;
    };
    Blockly.JavaScript['aaaa'] = function(block) {
      var text_name = block.getFieldValue('NAME');
      var text_name = block.getFieldValue('NAME');
      // TODO: Assemble JavaScript into code variable.
      var code = '';
      return code;
    };


  //크롤링

Blockly.JavaScript['user_script'] = function (block) {
    var Script_name = Blockly
        .JavaScript
        .valueToCode(block, 'Script_name', Blockly.JavaScript.ORDER_ATOMIC);
    var Word = Blockly
        .JavaScript
        .valueToCode(block, 'Word', Blockly.JavaScript.ORDER_ATOMIC);
    var Count = Blockly
        .JavaScript
        .valueToCode(block, 'Count', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "var Script_name = '__'; var word =('__') ; var count = __ ;\n";
    return code;
};

Blockly.JavaScript['script'] = function (block) {
    var value_name = Blockly
        .JavaScript
        .valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'script(Script_name,KeyWord,number);\n';
    return 'file_upload test';
};
//크롤링

// prolog
Blockly.JavaScript['prolog_list'] = function(block) {
  var code = '',statements_content,value_bar;
  var value_bar = Blockly.JavaScript.valueToCode(block, 'bar', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  //TODO: Assemble JavaScript into code variable.
  var elements = new Array();
  var split = statements_content.trim().split(',');

  for(var i=0; i<split.length-1; i++){
    elements.push(split[i]);
  }
  if(value_bar === '') return '';
  code += value_bar+'('
  code +=elements.join(',')
  code +=').';
  return code;
};

Blockly.JavaScript['constant'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code =text_name+",";
  return code;
};
Blockly.JavaScript['info_block_statement'] = function (block) {
  return '';
};
Blockly.JavaScript['funktor'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = text_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['rumpf'] = function(block) {
  var dropdown_seperate = block.getFieldValue('seperate');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var elements = new Array();
  var split = statements_name.trim().split(',');
  // TODO: Assemble JavaScript into code variable.
  for(var i=0; i<split.length-1; i++){
    elements.push(split[i]);
  }
  var code = '',dropdown_seperate,statements_name;
  if(dropdown_seperate=='and'){
    code = elements.join(',')+'.';
  }
  if(dropdown_seperate=='or'){
    code = elements.join(';')+'.';
  }
  return code;
};
Blockly.JavaScript['Rule'] = function(block) {
  var statements_fact = Blockly.JavaScript.statementToCode(block, 'Fact');
  var statements_rumpf = Blockly.JavaScript.statementToCode(block, 'Rumpf');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_fact+':-'+statements_rumpf;
  return code;
};
Blockly.JavaScript['abfrage'] = function(block) {
  var checkbox_active = block.getFieldValue('active');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code='';
  if(checkbox_active.toString()=='TRUE'){
    code=statements_name;
  }

  return code;
};
Blockly.JavaScript['separate'] = function(block) {
  var dropdown_separate = block.getFieldValue('separate');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  var code='';
  // TODO: Assemble JavaScript into code variable.
  if(dropdown_separate=='and'){
    code='?'+statements_name;
  }
  if(dropdown_separate=='or'){
    code='-'+statements_name;
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
//////////////////////////////////////numjs///////////////////////////////////////
Blockly.JavaScript['nj_array'] = function (block) {
  var text_array = block.getFieldValue('array');
  // TODO: Assemble JavaScript into code variable.
  var code = 'nj.array([' + text_array + '])';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['nj_sum'] = function (block) {
  var value_ar1 = Blockly.JavaScript.valueToCode(block, 'ar1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'nj.sum(' + value_ar1 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['nj_multiply'] = function (block) {
  var value_ar1 = Blockly.JavaScript.valueToCode(block, 'ar1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ar2 = Blockly.JavaScript.valueToCode(block, 'ar2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_ar1 + '.multiply(' + value_ar2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['nj_substract'] = function (block) {
  var value_ar1 = Blockly.JavaScript.valueToCode(block, 'ar1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ar2 = Blockly.JavaScript.valueToCode(block, 'ar2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_ar1 + '.subtract(' + value_ar2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['nj_add'] = function (block) {
  var value_ar1 = Blockly.JavaScript.valueToCode(block, 'ar1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ar2 = Blockly.JavaScript.valueToCode(block, 'ar2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_ar1 + '.add(' + value_ar2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE]
};
Blockly.JavaScript['nj_divide'] = function (block) {
  var value_ar1 = Blockly.JavaScript.valueToCode(block, 'ar1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ar2 = Blockly.JavaScript.valueToCode(block, 'ar2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_ar1 + '.divide(' + value_ar2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE]
};
Blockly.JavaScript['nj_shape'] = function (block) {
  var value_ar1 = Blockly.JavaScript.valueToCode(block, 'ar1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_ar1 + '.shape'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC]
};
Blockly.JavaScript['js_hypothesis'] = function (block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'W', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '(' + value_x + '.multiply(' + value_w + ')).add(' + value_b + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC]
};
Blockly.JavaScript['js_cost'] = function (block) {
  var value_hypothesis = Blockly.JavaScript.valueToCode(block, 'hypothesis', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_train = Blockly.JavaScript.valueToCode(block, 'y_train', Blockly.JavaScript.ORDER_ATOMIC);
  var text_mul = block.getFieldValue('mul');
  var value_len = Blockly.JavaScript.valueToCode(block, 'len', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'nj.sum((' + value_hypothesis + '.subtract(' + value_y_train + ')).pow(' + text_mul + '))/' + value_len;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['js_gradient_w'] = function (block) {
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mul = Blockly.JavaScript.valueToCode(block, 'mul', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_len = Blockly.JavaScript.valueToCode(block, 'len', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'nj.sum(((((' + value_x + '.multiply(' + value_w + ')).subtract(' + value_y + ')).add(' + value_b + ')).multiply(' + value_mul + ')).multiply(' + value_x2 + '))/' + value_len;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['js_gradient_b'] = function (block) {
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mul = Blockly.JavaScript.valueToCode(block, 'mul', Blockly.JavaScript.ORDER_ATOMIC);
  var value_len = Blockly.JavaScript.valueToCode(block, 'len', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'nj.sum((((' + value_x + '.multiply(' + value_w + ')).subtract(' + value_y + ')).add(' + value_b + ')).multiply(' + value_mul + '))/' + value_len;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['insert'] = function (block) {
  var value_val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_sep = block.getFieldValue('sep');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_val + dropdown_sep + value_value + ';\n';
  return code;
};
Blockly.JavaScript['console'] = function (block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log(' + value_value + ');\n';
  return code;
};


Blockly.JavaScript['for_c'] = function (block) {
  var value_val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s_val = Blockly.JavaScript.valueToCode(block, 's_val', Blockly.JavaScript.ORDER_ATOMIC);
  var value_e_val = Blockly.JavaScript.valueToCode(block, 'e_val', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var text_int = block.getFieldValue('int');
  var dropdown_math = block.getFieldValue('math');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'for(' + value_val + '=' + value_s_val + ';' + value_val + dropdown_name + value_e_val + ';' + value_val + dropdown_math + text_int + '){\n' + statements_name + '\n}\n'
  return code;
};
Blockly.JavaScript['if_c'] = function (block) {
  var value_val = Blockly.JavaScript.valueToCode(block, 'val', Blockly.JavaScript.ORDER_ATOMIC);
  var value_val2 = Blockly.JavaScript.valueToCode(block, 'val2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_sep = block.getFieldValue('sep');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'if(' + value_val + dropdown_sep + value_val2 + '){\n' + statements_name + '\n}\n';
  return code;
};
Blockly.JavaScript['printc'] = function(block) {
  var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'printc('+value_content+');\n';
  return code;
};
Blockly.JavaScript['lrgraph'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'LRgraph('+value_x+','+value_y+','+value_w+','+value_b+');';
  return code;
};