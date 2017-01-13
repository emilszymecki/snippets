var hash = {};
var stack = [];
var info = {};
$('.page-name-R8_garnki .row').on('change','.answer',function(e){
	var diff_sec = [];
	var x;
	var sec = {};
	$('.page-name-R8_garnki').find('.timestamp_info').remove()
    hash[$(this).getValueN()] = $.now();
     $('.page-name-R8_garnki .answer:not(":checked")').each(function(a,b){
        var el_not = $(this).getValueN();
        if(hash[el_not] != undefined){
            delete hash[el_not];
        }
       });
	stack = Object.keys(hash).sort(function(a,b){return hash[a]-hash[b]});
	x = Object.values(hash).sort(function(a,b){return hash[a]-hash[b]});
	for(var i = 0;i<x.length;i++){
		if(i>0){
			diff_sec[i] = (Math.abs(x[i-1]-x[i]))/1000;
		}else{
			diff_sec[i] = 0;
		}
	}

	for(var it = 0; it<stack.length;it++){
		sec[stack[it]]={'Nka':stack[it],'kolejnosc':it+1,'miedzy_klik':diff_sec[it]};
	}
   
   info = sec;
  
	$('.page-name-R8_garnki .answer:checked').each(function(a,b){
		var N = $(this).getValueN();	
		$(this).parents("label").append($("<div>").addClass("timestamp_info").html('<div>'+JSON.stringify(info[N],null,2)+'</div>'));
	})

});
