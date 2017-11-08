var checkTable = function(x){
        var validate = true
        $('.page-name-'+x).find('tbody').find('tr').each(function(){
            var ctrl = false
            $(this).find('.answer').each(function(){
                if($(this).is(':checked')){
                    ctrl = true
                }
            })
            if(!ctrl){
                validate = false
            }
        })
         return validate
    }
var otherBlck = function(x){
    $('.page-name-'+x).find('.n-'+x+'-98').removeClass (function (index, className) {
           return (className.match (/\bshuffle\S+/g) || []).join(' ');
       });

var camp_valid = function(x){
	var l = $('.n-'+x+'-98-input').val().length == 0
	var col_1 = $('.n-'+x+'-98').find('.col-1').find('.answer').is(':checked')
	if(l && col_1){
		 $('.input_alert').show()
		 setTimeout(function(){ $('.page-name-'+x).trigger('pageNotReady') }, 300);
	}else{
		$('.input_alert').hide()
		  if(checkTable(x)){
             setTimeout(function(){ $('.page-name-'+x).trigger('pageReady') }, 300);
          }else{
			$('.input_alert').show()
			 setTimeout(function(){ $('.page-name-'+x).trigger('pageNotReady') }, 300);
		  }
	}
}    

    $('.page-name-'+x).find('.n-'+x+'-98').find('td').first().append($('<input>').addClass('n-'+x+'-98-input'))
    $('.n-'+x+'-98-input').after($('<span class="input_alert">Wypełnij pole</span>').hide())
    
	    $('.n-'+x+'-98').find('.answer').on('change',function(){
			camp_valid(x)
          	if($(this).parents('td').hasClass('col-2')){
				 $('.n-'+x+'-98-input').prop('disabled',true).val("").trigger("change")
			}else{
				 $('.n-'+x+'-98-input').prop('disabled',false).trigger('change')
			}
		})
       

    $('.n-'+x+'-98-input').on('input',function(){
	   var block = $(this).is(':disabled'),
	   empty = $(this).val().length,
	   col1 = $('.n-'+x+'-98').find('.col-1').find('.answer')
	   if(empty){
			$(col1).prop('checked',true).trigger('change')
	   }else{
			$(col1).prop('checked',false).trigger('change')
		}
	})
}
