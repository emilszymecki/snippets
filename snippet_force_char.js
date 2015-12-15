//R10
    Survey.bind('R10','page','relevance',function(s){
  if(s.data['R1-1'] != true) {
  return false;
  }
});

    Survey.bind('R9a','page','relevance',function(s){
  if(s.data['R9-1'] != true) {
  return false;
  }
});

$.fn.ForceCharOnly = function(){
  return this.each(function(){
    $(this).keypress(function(e){
      var key = e.charCode || e.keyCode || 0;
      if (!!(key >= 48 && key <= 57)){
        return false;
      }
      return true;      
    });
  });
}