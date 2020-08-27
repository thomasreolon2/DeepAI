    var x,w,b,lr,epochs,w_gradient,b_gradient;

    x_data=nj.array([2,4,6,8,10,12,14]);
    y_data=nj.array([0,0,0,1,1,1,1]);
    w=0;
    b=0;
    lr=0.001
    epochs=100
    function sigmoid(x){
        return 1/(1+nj.exp **(-x))   
    }

    for(var i=0;i<epochs; i++ ){
        w_gradient=x_data.multiply(sigmoid(x_data.multiply(w).add(b)))

    }