var ColRow = {

	filter: (function(){
				 $.fn.filterData = function(key, value) {
				      return this.filter(function() {
				          return $(this).data(key) == value;
				      });
				   };
			 })(),
	pName : function(x){
		var pName_td= '.'+x.attr('class').split(' ')[x.attr('class').split(' ').length-1]+' td';
     	var pName_th= '.'+x.attr('class').split(' ')[x.attr('class').split(' ').length-1]+' th';
     	var eachTable = $(pName_td+','+pName_th);
     	return eachTable;
	},
	dataFill: function(po){
	    $(po).find('table').children().children().each(function(x,y){
	        $(this).children().each(function(a,b){
	            $(this).data('row',x);
	            $(this).data('col',a);
	        });
	      });
   },
    remove:function(po,colrow,el){
	   	 this.dataFill(po);
	   	 var cell = this.pName(po);
	     $(cell).filterData(colrow,el).each(function(){
	          Survey._remove($(this));
	      });
    },
    block:function(po,colrow,el,limitblk){
    	this.dataFill(po);
	   	var cell = this.pName(po);

		$(cell).on("change",".answer",function(){
		  var counter = 0;
		  var limit = limitblk;

			$(cell).filterData(colrow,el).each(function(){
			    if($(this).find('.answer').is(':checked')){
			      counter++;
			    }
			});
		   
			if(limit <= counter){
			    $(cell).filterData(colrow,el).find('.answer').not(":checked").each(function(){$(this).prop("disabled",true);});
			}else{
			    $(cell).filterData(colrow,el).find('.answer').not(":checked").each(function(){$(this).prop("disabled",false);});
			}
		           
		});
    }

};

// Wywołanie

/*
Pierwszy parametr zawsze po - pagename
Drugi, wiersz czy kolumna <- "col"/"row"
Trzeci <- nr kolumny/rzędu
W wypadku funkcji block <- limit po ilu ma blokować inputy
*/

ColRow.remove(po,"col",2);
ColRow.block(po,"row",1,1);
