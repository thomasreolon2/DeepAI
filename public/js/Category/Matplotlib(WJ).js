//<!-- # 시각화 부분 #  -->';
var MAT = '<category name="%{BKY_CATEGORY_MATPLOT}" colour="%{BKY_VISUAL_HUE}">'; 
MAT += '<category name="%{BKY_MAT_BASIC}" colour="%{BKY_VISUAL_HUE}">';
// //<!-- 그래프 출력 -->';
MAT += '<block type="visualization_library"></block >';

// MAT += '<block type="visualization_library_cm"></block >';

// MAT += '<block type="val_vi"></block >';
// //<!--  그래프 출력 갯수    -->';
MAT += '<block type="matplotlib_main">';
MAT += '<value name="matplotlib_main_cols">';
MAT += '<shadow type="math_number">';
MAT += '<field name="NUM">2</field>';
MAT += '</shadow>';
MAT += '</value>';

MAT += '<value name="matplotlib_main_rows">';
MAT += '<shadow type="math_number">';
MAT += '<field name="NUM">2</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '</block >';
// //<!--  그래프 출력 갯수    -->';

MAT += '<block type="matplotlib_pre_graph_plt_2">';
MAT += '<value name="xx">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">x_data</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="yy">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">y_data</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_legend">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">test</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_color">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">"blue"</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_other">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1"></field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '</block>';

// //<!--  matplot2 시각화 plt 버전 (출력설정)      -->';
MAT += '<block type="matplotlib_pre_graph_plt">';
// MAT += '<value name="matplotlib_pre_graph_location1">';
// MAT += '<shadow type="math_number">';
// MAT += '<field name="NUM">0</field>';
// MAT += '</shadow>'; 
// MAT += '</value>';
// MAT += '<value name="matplotlib_pre_graph_location2">';
// MAT += '<shadow type="math_number">';
// MAT += '<field name="NUM">0</field>';
// MAT += '</shadow>';
// MAT += '</value>';
MAT += '<value name="xx">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">x_data</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="yy">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">y_data</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_graph_Title">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">Test</field>';
MAT += '</shadow>';
MAT += '</value>';



MAT += '<value name="matplotlib_pre_graph_Xlable">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">X</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_graph_Ylable">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">Y</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_legend">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">test</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_color">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">"blue"</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_other">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1"></field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '</block >';
// //<!--  matplot2 시각화 plt 버전   -->';



// //<!--  matplot2 시각화 준비(출력설정)      -->';
MAT += '<block type="matplotlib_pre_graph">';
MAT += '<value name="matplotlib_pre_graph_location1">';
MAT += '<shadow type="math_number">';
MAT += '<field name="NUM">0</field>';
MAT += '</shadow>'; 
MAT += '</value>';
MAT += '<value name="matplotlib_pre_graph_location2">';
MAT += '<shadow type="math_number">';
MAT += '<field name="NUM">0</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="xx">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">x_data</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="yy">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">y_data</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_graph_Title">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">Test</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_graph_Xlable">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">X</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_graph_Ylable">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">Y</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_legend">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">test</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_color">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">"blue"</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_other">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1"></field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '</block >';
// //<!--  matplot2 시각화 준비      -->';

// //<!--  matplot3 시각화 하기      -->';
// //<!-- MAT += '<block type="matplotlib_graph_end"></block>'; -->';
// //<!--  matplot3 시각화 하기      -->';

// //<!--  matplot plt.show()      -->';
MAT += '<block type="matplotlib_plt_show"></block >';

// //<!-- 2021-01-21 그래프크기설정 양승국-->';
// MAT += '<block type = "matp_Ex">';
// MAT += '<value name="d1">';
// MAT += '<block type="variables_get">';
// MAT += '<field name="VAR">plt</field>';
// MAT += '</block >';
// MAT += '</value>';
// MAT += '<value name="d2">';
// MAT += '<shadow type="math_number">';
// MAT += '<field name="NUM">2</field>';
// MAT += '</shadow>';
// MAT += '</value>';
// MAT += '<value name="d3">';
// MAT += '<shadow type="math_number">';
// MAT += '<field name="NUM">2</field>';
// MAT += '</shadow>';
// MAT += '</value>';
// MAT += '</block >';

// //<!-- subplots -->';
// MAT += '<block type="subplots">';
// MAT += '<value name="VAR1">';
// MAT += '<block type="variables_get">';
// MAT += '<field name="VAR">plt</field>';
// MAT += '</block >';
// MAT += '</value>';
// MAT += '<value name="VAR2">';
// MAT += '<shadow type="indata">';
// MAT += '<field name="indata1"></field>';
// MAT += '</shadow>';
// MAT += '</value>';
// MAT += '</block >';

// //<!--  matplot plt.plot()      -->';
// MAT += '<block type="ax_lst_plot">';
// MAT += '<value name="list">';
// MAT += '<block type="variables_get">';
// MAT += '<field name="VAR">plt</field>';
// MAT += '</block >';
// MAT += '</value>';
// MAT += '<value name="NAME">';
// MAT += '<shadow type="indata">';
// MAT += '<field name="indata1"></field>';
// MAT += '</shadow>';
// MAT += '</value>';
// MAT += '</block >';

// //<!-- title -->';
// MAT += '<block type = "matp_title">';
// MAT += '<value name="d1">';
// MAT += '<block type="variables_get">';
// MAT += '<field name="VAR">plt</field>';
// MAT += '</block >';
// MAT += '</value>';
// MAT += '<value name="d2">';
// MAT += '<shadow type="indata">';
// MAT += '<field name="indata1"></field>';
// MAT += '</shadow>';
// MAT += '</value>';
// MAT += '</block >';

// //<!-- set_title,  legend -->';
// MAT += '<block type="plt_title_legend">';
// MAT += '<value name="list">';
// MAT += '<block type="variables_get">';
// MAT += '<field name="VAR">ax</field>';
// MAT += '</block >';
// MAT += '</value>';
// MAT += '<value name="NAME">';
// MAT += '<shadow type="indata">';
// MAT += '<field name="indata1"></field>';
// MAT += '</shadow>';
// MAT += '</value>';
// MAT += '<value name="NAME2">';
// MAT += '<shadow type="indata">';
// MAT += '<field name="indata1"></field>';
// MAT += '</shadow>';
// MAT += '</value>';
// MAT += '</block >';
// //<!-- label -->';
// MAT += '<block type="plt_xlabel_ylabel">';
// MAT += '<value name="list">';
// MAT += '<block type="variables_get">';
// MAT += '<field name="VAR">plt</field>';
// MAT += '</block >';
// MAT += '</value>';
// MAT += '<value name="NAME">';
// MAT += '<shadow type="indata">';
// MAT += '<field name="indata1">""</field>';
// MAT += '</shadow>';
// MAT += '</value>';
// MAT += '<value name="NAME2">';
// MAT += '<shadow type="indata">';
// MAT += '<field name="indata1">""</field>';
// MAT += '</shadow>';
// MAT += '</value>';
// MAT += '</block >';

// //<!-- label -->';
// MAT += '<block type="set_xlabel_ylabel">';
// MAT += '<value name="list">';
// MAT += '<block type="variables_get">';
// MAT += '<field name="VAR">ax</field>';
// MAT += '</block >';
// MAT += '</value>';
// MAT += '<value name="NAME">';
// MAT += '<shadow type="indata">';
// MAT += '<field name="indata1">""</field>';
// MAT += '</shadow>';
// MAT += '</value>';
// MAT += '<value name="NAME2">';
// MAT += '<shadow type="indata">';
// MAT += '<field name="indata1">""</field>';
// MAT += '</shadow>';
// MAT += '</value>';
// MAT += '</block >';

MAT += '<block type="plt_axis">';
MAT += '<value name="list">';
MAT += '<block type="variables_get">';
MAT += '<field name="VAR">plt</field>';
MAT += '</block >';
MAT += '</value>';
MAT += '<value name="NAME">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1"></field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '</block >';




MAT += '<block type="set_xlim_ylim_">';
MAT += '<value name="NAME">';
MAT += '<block type="variables_get">';
MAT += '<field name="VAR">plt</field>';
MAT += '</block >';
MAT += '</value>';
MAT += '<value name="val_x">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1"></field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="val_y">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1"></field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '</block >';


MAT += '<block type="set_xticks_yticks">';
MAT += '<value name="NAME">';
MAT += '<block type="variables_get">';
MAT += '<field name="VAR">plt</field>';
MAT += '</block >';
MAT += '</value>';
MAT += '<value name="val_x">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1"></field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="val_y">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1"></field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '</block >';
// MAT += '<block type="plt_figure">';
// MAT += '<value name="list">';
// MAT += '<block type="variables_get">';
// MAT += '<field name="VAR">plt</field>';
// MAT += '</block >';
// MAT += '</value>';
// MAT += '<value name="NAME">';
// MAT += '<shadow type="indata">';
// MAT += '<field name="indata1"></field>';
// MAT += '</shadow>';
// MAT += '</value>';
// MAT += '</block >';

// imshow()
MAT += '<block type = "pie_subplots_1">';
MAT += '<value name="name1">';
MAT += '<block type="variables_get">';
MAT += '<field name="VAR">plt</field>';
MAT += '</block >';
MAT += '</value>';
MAT += '<value name="name2">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1"></field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '</block >';

// MAT += '<block type="shape">';
// MAT += '<value name="VAR1">';
// MAT += '<block type="variables_get">';
// MAT += '<field name="VAR">plt</field>';
// MAT += '</block >';
// MAT += '</value>';
// MAT += '</block >';

// //<!-- 2021-01-21 양승국 블럭 추가-->';
// //<!--  matplot plt.plot()      -->'; 
// MAT += '<block type = "plt_ravel">';
// MAT += '<value name="name1">';
// MAT += '<block type="variables_get">';
// MAT += '<field name="VAR">plt</field>';
// MAT += '</block >';
// MAT += '</value>';
// MAT += '<value name="name2">';
// MAT += '<shadow type="indata">';
// MAT += '<field name="indata1"></field>';
// MAT += '</shadow>';
// MAT += '</value>';
// MAT += '</block >';
// //<!-- 
// // MAT += '<block type="set_axis_off">';
// // MAT += '<value name="data">';
// // MAT += '<shadow type="indata">';
// // MAT += '<field name="indata1"></field>';
// // MAT += '</shadow>';
// // MAT += '</value>';
// // MAT += '<value name="data2">';
// // MAT += '<shadow type="indata">';
// // MAT += '<field name="indata1"></field>';
// // MAT += '</shadow>';
// // MAT += '</value>';
// // MAT += '</block >'; -->';
// //<!--  matplot plt.show()      -->';

// //<!--  사이킷런 시각화 하기      -->';
// //<!-- MAT += '<block type="lrgraph"></block>';
// // MAT += '<block type="logicgraph"></block >'; -->';
// //<!-- MAT += '<block type="vis_tree"></block>'; -->';
// //<!--  사이킷런 시각화 하기      -->';

MAT += '</category >';
// //<!-- ************************************************** ************************* *************************  -->';
// //<!-- ***************************************  데이터 시각화 (Matplotlib)  ******************************************  -->';
// //<!-- ************************************************** ************************* *************************  -->';
//<!--  matplot pie    -->
MAT += '<category name="%{BKY_MAT_VISUAL}" colour="%{BKY_VISUAL_HUE}">';
MAT +=      '<block type="matplotlib_pie">';
MAT +=          '<value name="data">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">y</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';

MAT +=          '<value name="labels">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">x</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';

MAT +=          '<value name="autopct">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">\'%.2f%%\'</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';

MAT +=          '<value name="title">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">\'Bar Chart\'</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';

MAT +=          '<value name="explode">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">(0,0.1,0,0)</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';

MAT +=          '<value name="other">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1"></field>';
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=      '</block>';
//<!--  matplot bubble    -->
MAT +=      '<block type="matplotlib_bubble">';
MAT +=          '<value name="data_x">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">y</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';

MAT +=          '<value name="data_y">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">x</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';

MAT +=          '<value name="data_z">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">z</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';

MAT +=          '<value name="color">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">\'violet\'</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';

MAT +=          '<value name="title">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">\'Bubble Chart\'</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';

MAT +=          '<value name="legend">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">\'(x,y,z)\'</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';

MAT +=          '<value name="other">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1"></field>';
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=      '</block>';

//<!--  matplot 컬러맵    -->
MAT +=      '<block type="matplotlib_colormap">';
MAT +=          '<value name="data_x">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">x</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';

MAT +=          '<value name="title">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">\'Colormap\'</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=      '</block>';


//<!--  matplot 1차원 히스토그램    -->
MAT +=      '<block type="matplotlib_histo_graph_plt">';
MAT +=          '<value name="xx">';
MAT +=              '<block type="variables_get">';
MAT +=                  '<field name="VAR">x</field>'; // np.random.uniform(size = 1000)
MAT +=              '</block >';
MAT +=          '</value>';
MAT +=          '<value name="matplotlib_pre_graph_Title">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">Test</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=          '<value name="matplotlib_pre_graph_Xlable">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">X</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=          '<value name="matplotlib_pre_graph_Ylable">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">Y</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=          '<value name="matplotlib_pre_legend">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">test</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=          '<value name="matplotlib_pre_other">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1"></field>';
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=      '</block >';
//<!--  matplot 1차원 히스토그램    -->

//<!--  matplot 3차원 scatter(버블)    -->
MAT +=      '<block type="matplotlib_bubble_graph_plt">';
MAT +=          '<value name="xx">';
MAT +=              '<block type="variables_get">';
MAT +=                  '<field name="VAR">x</field>'; // np.random.normal(size=100)
MAT +=              '</block >';
MAT +=          '</value>';
MAT +=          '<value name="yy">';
MAT +=              '<block type="variables_get">';
MAT +=                  '<field name="VAR">y</field>'; // np.random.normal(size=100)
MAT +=              '</block >';
MAT +=          '</value>';
MAT +=          '<value name="zz">';
MAT +=              '<block type="variables_get">';
MAT +=                  '<field name="VAR">z</field>'; // np.random.normal(size=100)*100
MAT +=              '</block >';
MAT +=          '</value>';
MAT +=          '<value name="matplotlib_pre_graph_Title">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">Test</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=          '<value name="legend">';
MAT +=              '<shadow type="indata">';
MAT +=                  "<field name='indata1'>'(x,y,z)'</field>";
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=          '<value name="matplotlib_pre_other">';
MAT +=              '<shadow type="indata">';
MAT +=                  "<field name='indata1'>c='violet'</field>";
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=      '</block >';
//<!--  matplot 3차원 scatter(버블)    -->

//<!--  matplot 3차원 plot_surface(서페이스)    -->
MAT +=      '<block type="matplotlib_axes3d_graph_plt">';
MAT +=          '<value name="xx">';
MAT +=              '<block type="variables_get">';
MAT +=                  '<field name="VAR">x</field>'; // np.arange(-5, 5, 0.25)
MAT +=              '</block >';
MAT +=          '</value>';
MAT +=          '<value name="yy">';
MAT +=              '<block type="variables_get">';
MAT +=                  '<field name="VAR">y</field>'; // np.arange(-5, 5, 0.25)
MAT +=              '</block >';
MAT +=          '</value>';
MAT +=          '<value name="zz">';
MAT +=              '<block type="variables_get">';
MAT +=                  '<field name="VAR">z</field>'; // np.sin(np.sqrt(x**2 + y**2))
MAT +=              '</block >';
MAT +=          '</value>';
MAT +=          '<value name="matplotlib_pre_graph_Title">';
MAT +=              '<shadow type="indata">';
MAT +=                  '<field name="indata1">Test</field>';
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=          '<value name="xlabel">';
MAT +=              '<shadow type="indata">';
MAT +=                  "<field name='indata1'>X values</field>";
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=          '<value name="ylabel">';
MAT +=              '<shadow type="indata">';
MAT +=                  "<field name='indata1'>Y values</field>";
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=          '<value name="zlabel">';
MAT +=              '<shadow type="indata">';
MAT +=                  "<field name='indata1'>Z values</field>";
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=          '<value name="other">';
MAT +=              '<shadow type="indata">';
MAT +=                  "<field name='indata1'>cmap='hot'</field>";
MAT +=              '</shadow>';
MAT +=          '</value>';
MAT +=      '</block >';
//<!--  matplot 3차원 plot_surface(서페이스)    -->



//박스 그래프 2차원 

MAT += '<block type="bar_char">';
// MAT += '<value name="matplotlib_pre_graph_location1">';
// MAT += '<shadow type="math_number">';
// MAT += '<field name="NUM">0</field>';
// MAT += '</shadow>'; 
// MAT += '</value>';
// MAT += '<value name="matplotlib_pre_graph_location2">';
// MAT += '<shadow type="math_number">';
// MAT += '<field name="NUM">0</field>';
// MAT += '</shadow>';
// MAT += '</value>';
MAT += '<value name="xx">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">x_data</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="yy">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">y_data</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_graph_Title">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">Test</field>';
MAT += '</shadow>';
MAT += '</value>';

MAT += '<value name="matplotlib_pre_graph_Xlable">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">X</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_graph_Ylable">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">Y</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_legend">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">test</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_color">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">"blue"</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_other">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1"></field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '</block >';


//라인 
MAT += '<block type="line_plot">';

MAT += '<value name="xx">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">x_data</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="yy">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">y_data</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_graph_Title">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">Test</field>';
MAT += '</shadow>';
MAT += '</value>';

MAT += '<value name="matplotlib_pre_graph_Xlable">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">X</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_graph_Ylable">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">Y</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_legend">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">test</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_color">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1">"blue"</field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '<value name="matplotlib_pre_other">';
MAT += '<shadow type="indata">';
MAT += '<field name="indata1"></field>';
MAT += '</shadow>';
MAT += '</value>';
MAT += '</block >';


MAT += '</category >';



MAT += '</category >';
