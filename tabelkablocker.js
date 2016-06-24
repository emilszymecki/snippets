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
	    
	});

    $(".page-name-"+name+" .answer").parents(".col-"+block).find(".answer").on("change",function(x){
    	var parentRow =  $(this).parents("tr");
    	var nonClickTd = parentRow.find(".clickTd:not(.col-"+block+")");
    	 parentRow.find(".answer").attr("disabled",false);
	    if($(this).is(":checked")){
	      nonClickTd.find(".answer").prop( "checked", false );
	      nonClickTd.find(".answer").attr("disabled",true).hide();
	      nonClickTd.append('<span class="glyphicon glyphicon-remove"></span>');
	    }else{
	    	nonClickTd.find(".glyphicon-remove").hide();
	      nonClickTd.find(".answer").show();
	    }
		});

}
