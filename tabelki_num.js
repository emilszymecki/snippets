$('.page-name-M2 table').children().find('tr').each(function(a,b){
 $(this).children().data("row", $(this).getValueN())
 $(this).children().each(function(a,b){
  if($(this).index() == 0){
    $(this).data("col",null)
  }
  if($(this).find('.label').html() != undefined){
   $(this).data("col",$(this).find('.label').html().split("-")[2])
  }else{  
       if(typeof($(this).data('col')) != "object"){
          $(this).data("col",$(this).parents('table').find('tbody tr').eq(0).find('td').eq($(this).index()).find('span').html().split("-")[2]);
       }
  }
})
});
