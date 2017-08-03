$(document).ready(function(){
	var exit = function(a){
      var name = $(this).attr('class').split(" ")[5].split("-")[2]
      forceAnswer(name,'88',"Proszę wypełnić pole");
    }
    $('.n-88').parents('.panel-default').each(exit)
    
    //slider
    $( function() {
      $('.page-name-PG24 .question-row').hide()
      $( "#slider-range-max" ).slider({
        range: "min",
        min: 0,
        max: 10,
        value: 0,
        slide: function( event, ui ) {
          $( "#amount" ).val( ui.value );
          $('.page-name-PG24').find('.n-'+ui.value).find('.answer').prop('checked',true).trigger("change")

        }
      }).each(function() {
  			var opt = $(this).data().uiSlider.options;
  			var vals = opt.max - opt.min;
 			for (var i = 0; i <= vals; i++) {
    			var el = $('<label class = "slider_scale">'+(i)+'</label>').css('left',(i/vals*100)+'%'); 
    			$( "#slider-range-max" ).append(el);
  	}
	});
      $( "#amount" ).val( "Przeciągnij" );
  });
  //slider -koniec
})
