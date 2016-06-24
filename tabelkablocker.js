function tableLimiter(name,n,lim,hv,block){

$(".page-name-"+name+" .answer").on("change",function(e){
    var make;
    if(hv==0){
    	 make = $(".page-name-"+name+" .answer").parents(".col-"+n);
    }
    if(hv==1){
    	make = $(".page-name-"+name+" .answer").parents("tbody").find("tr").eq(n-1);
    }
    var limit = lim;
    var active = make.find(".answer:checked");
    var deactive = make.find(".answer:not(:checked)");
    if(active.length >= limit){
      deactive.attr('disabled',true);
    }else{
      deactive.attr('disabled',false);
    }
    
    $(".page-name-"+name+" .answer").parents(".col-"+block).find(".answer").on("change",function(x){
    	 $(this).parents("tr").find(".answer").attr("disabled",false);
	    if($(this).is(":checked")){
	      $(this).parents("tr").find(".clickTd:not(.col-"+block+")").find(".answer").prop( "checked", false );
	      $(this).parents("tr").find(".clickTd:not(.col-"+block+")").find(".answer").attr("disabled",true).hide();
	    }else{
	      $(this).parents("tr").find(".clickTd:not(.col-"+block+")").find(".answer").show();
	    }
		});

});

}
