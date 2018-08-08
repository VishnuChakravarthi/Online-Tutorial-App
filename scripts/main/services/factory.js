app.factory("LocalStorage",function(){
    var prodDet;
    return{
        setProdDet : function(product){
            prodDet = product;
        },
        getProdDet : function(){
            return prodDet;
        }, 
             
    }
})