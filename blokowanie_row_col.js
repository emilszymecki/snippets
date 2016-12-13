function limitColRow(po,colrow,limitblk,el){
	// zmiennne do iteracji po komórkach
	   var pName_td= '.'+po.attr('class').split(' ')[po.attr('class').split(' ').length-1]+' td';
	   var pName_th= '.'+po.attr('class').split(' ')[po.attr('class').split(' ').length-1]+' th';
	   var eachTable = $(pName_td+','+pName_th); // suma pName_td i pName_th

	// plugin do jquery który pozwala nam filtrować komórki po kluczu obiektu który tworzymy funkcją .data()
	  $.fn.filterData = function(key, value) {
	    return this.filter(function() {
	        return $(this).data(key) == value;
	    });
	 };
    
    //funkcją data wypełniamy każdą komórkę -> {'row':nr rzędy, 'col':nr columny}
	 function dataFill(po){
	 	$(po).find('table').children().children().each(function(x,y){
	    	$(this).children().each(function(a,b){
	        	$(this).data('row',x);
	        	$(this).data('col',a);
	    	});
	  	});
	 }
   // blokowanie w wierszu albo kolumnie
function blockColRoW(colrow,limitblk,el){ // parametry colrow:"col"albo"row"|limitblk <- po ilu zachodzi blokada| el <- który wiersz kolumna
	 $(eachTable).on("change",".answer",function(){
	  var counter = 0; // liczy ile zostało zaznaczonych
	  var limit = limitblk; // zmienna z limitem

	  $(eachTable).filterData(colrow,el).each(function(){
	    if($(this).find('.answer').is(':checked')){
	      counter++; // jeżeli kliknięte podnieś counter
	        }
	  });
	   if(limit <= counter){ // jeżeli counter jest większy od limitu
	    $(eachTable).filterData(colrow,el).find('.answer').not(":checked").each(function(){$(this).prop("disabled",true);});
	   }else{
	    $(eachTable).filterData(colrow,el).find('.answer').not(":checked").each(function(){$(this).prop("disabled",false);});
	  }
	           
	 });
    }

    // wywołania funkcji
	 dataFill(po);
	 blockColRoW(colrow,limitblk,el);

}
