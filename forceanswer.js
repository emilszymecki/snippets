function forceAnswer(Pname,n,text){
var small = $("<small class='otherInfo hide' style='color: red !important'>"+text+"</small>");
var page = $(".page-name-"+Pname+" .n-"+n);
var label = page.find("label");
var answer = page.find(".answer");
var input = page.find('.form-control');
$(label).append(small);
var other = page.find(".otherInfo");

    $(answer).on('change', function(){ 
      if(!($(other).hasClass('hide'))){ 
        $(other).addClass('hide'); 
      }
      if($(answer).prop("checked")){ 
        if($(input).val() == ""){ 
          setTimeout(function(){ 
            $(page).trigger('pageNotReady'); 
            $(other).removeClass('hide'); 
        },100);
        }else{
          $(page).trigger('pageReady'); 
        }
      }
    });

    $(input).on('keyup',function(){ 
      $(answer).trigger('change'); 
    });
}
