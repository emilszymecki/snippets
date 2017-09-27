<script type="text/javascript">

var giveN = function(name){
	var exp = $('.page-name-'+name).find('.answer:checked').getValueN()
	return exp != null ? exp:"99"
}


var marki = {
1:{name:'De’Longhi',img:'http://cdn3.pollster.pl/badania/assets/522/logos/new/1b39911ff0fc38ae15d472c03c71ec5a.jpg'},
2:{name:'Saeco',img:'http://cdn3.pollster.pl/badania/assets/522/logos/new/e0b1ea376ea1bb34ca47fc99a51fd4aa.jpg'},
3:{name:'Krups',img:'http://cdn3.pollster.pl/badania/assets/522/logos/new/19cfebb99b36347c19498558faa327d6.jpg'},
4:{name:'Bosch',img:'http://cdn3.pollster.pl/badania/assets/522/logos/new/2688fb24eef34c742d3ca21e642a4235.jpg'},
5:{name:'Siemens',img:'http://cdn3.pollster.pl/badania/assets/522/logos/new/74993f42c49b81f3a77103bcbb247c2b.jpg'},
6:{name:'Nivona',img:'http://cdn3.pollster.pl/badania/assets/522/logos/new/7fd0672d9ccd471474b2d8ab1cb32d47.jpg'},
7:{name:'Philips',img:'http://cdn3.pollster.pl/badania/assets/522/logos/new/c1f456ee3fc507d644eb50420511ad91.jpg'},
8:{name:'Tchibo Cafissimo',img:'http://cdn3.pollster.pl/badania/assets/522/logos/new/3e8407e6f16222c99c5fcc30c7fa4a9d.jpg'},
9:{name:'Nespresso',img:'http://cdn3.pollster.pl/badania/assets/522/logos/new/4fece874662dc44af0b05bc1b9a06e64.jpg'},
10:{name:'Jura',img:'http://cdn3.pollster.pl/badania/assets/522/logos/new/93e4c11823366c375f07a86f4e79fdf1.jpg'},
11:{name:'Kenwood',img:'http://cdn3.pollster.pl/badania/assets/522/logos/new/85e9ff08f186d29daf40875f980c2e43.jpg'},
12:{name:'Nescafe Dolce Gusto',img:'http://cdn3.pollster.pl/badania/assets/522/logos/new/5c065f0deae20d5d3eab56a7f74baccb.jpg'},
13:{name:'Miele',img:'http://cdn3.pollster.pl/badania/assets/522/logos/new/81e66f8fe8abe14bdcf06abf7c170a3b.jpg'},
94:{name:'Innej marki',img:''},
99:{name:'',img:''}
}

var types ={
0:{name:'Ekspres kapsułkowy',img:'http://cdn3.pollster.pl/badania/assets/522/logos/ek/kapsulkowy_na_kapsulki.jpg'},
1:{name:'Ekspres ciśnieniowy automatyczny',img:'http://cdn3.pollster.pl/badania/assets/522/logos/ek/cisnieniowy_automatyczny_z_wbudowanym_mlynkiem.jpg'},
2:{name:'Ekspres ciśnieniowy kolbowy',img:'http://cdn3.pollster.pl/badania/assets/522/logos/ek/cisnieniowy_kolbowy.jpg'},
3:{name:'Ekspres przelewowy',img:'http://cdn3.pollster.pl/badania/assets/522/logos/ek/przelewowy_z_dzbankiem.jpg'},
4:{name:'Kawiarka',img:'http://cdn3.pollster.pl/badania/assets/522/logos/ek/kawiarka.jpg'}
}

var odp1 =['Zapada w pamięć'
,'Podoba mi się'
,'Przyciągnęła moją uwagę'
,'Zachęca mnie, aby dowiedzieć się czegoś więcej o ekspresach do kawy marki De’Longhi'
,'Zachęca mnie do zakupu ekspresu do kawy De’Longhi'
,'Mówi o rzeczach, które są dla mnie ważne'
,'Ta reklama wyróżnia się, jest inna niż wszystkie'
,'Jest zrozumiała'
,'Pasuje do marki De’Longhi'
,'Dowiedziałem/am się z tej reklamy nowych rzeczy'
,'Sprawia, że myślę o ekspresach do kawy De’Longhi bardziej pozytywnie niż dotychczas'
,'Pokazuje, że ekspresy do kawy De’Longhi są lepsze niż inne ekspresy do kawy'
,'Pokazuje / mówi, że ekspres do kawy De’Longhi oferuje możliwość przygotowania różnorodnych rodzajów kawy'
,'Pokazuje / mówi, że ekspres do kawy De’Longhi jest nowoczesny'
,'Pokazuje / mówi, że ekspres do kawy De’Longhi jest wyjątkowy'];
  
var odp2 = ['Świadczy o tym, że ekspresy do kawy De’Longhi są wyjątkowe'
,'Pokazuje, że ekspresy do kawy De’Longhi są lepsze niż inne ekspresy do kawy'
,'Podoba mi się'
,'Zachęca mnie, aby dowiedzieć się czegoś więcej o ekspresach do kawy marki De’Longhi'
,'Zachęca mnie do zakupu ekspresu do kawy De’Longhi'
];

  function forceAnswer(Pname,n,text){
var small = $("<small class='otherInfo hide' style='color: red !important'>"+text+"</small>");
var page = $(".page-name-"+Pname+" .n-"+n);
var label = page.find("label");
var answer = page.find(".answer");
var input = page.find('.form-control');
$(label).append(small);
var other = page.find(".otherInfo");

   $(".page-name-"+Pname+" .answer").on("change",function(){
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
}; 
  // FILTRY
  
  $(document).ready(function(){
    
    //$('.page-name-Z3 .thumbnail').css('min-height','300px')
    
    //KOSZYKI
    
    //styczeń
$('.page-name-W1 th').each(function(a,b){
 	var n = $(this).getValueN()
 	if(n != null && n != 99){
		$('#header-W1_1-'+n).html($('<img>').attr('src','http://cdn3.pollster.pl/badania/assets/291/w/'+n+'.jpg').css({'width':'50%','display':'block','margin':'0 auto'}));
		$('#fheader-W1_1-'+n).html($('<img>').attr('src','http://cdn3.pollster.pl/badania/assets/291/w/'+n+'.jpg').css({'width':'50%','display':'block','margin':'0 auto'}));
	}
})

$('.page-name-W1_1 th').each(function(a,b){
 	var n = $(this).getValueN()
 	if(n != null && n != 99){
		$('#header-W1-'+n).html($('<img>').attr('src','http://cdn3.pollster.pl/badania/assets/291/w/'+n+'.jpg').css({'width':'50%','display':'block','margin':'0 auto'}));
		$('#fheader-W1-'+n).html($('<img>').attr('src','http://cdn3.pollster.pl/badania/assets/291/w/'+n+'.jpg').css({'width':'50%','display':'block','margin':'0 auto'}));
	}
})

    $('.page-name-W1 th').css('text-align','center')
    $('.page-name-W1_1 th').css('text-align','center')
	
    $(".page-name-BN td").css({"vertical-align":"middle","font-weight":"bold"});
	$(".page-name-BN th").css({"text-align":"center","vertical-align":"middle"});
    

    
    $('.page-name-Z9T_2 .col-md-4').css('width','24.5%');
    $('.page-name-Z9N_2 .col-md-4').css('width','24.5%');
    $('.page-name-Z10T_2 .col-md-4').css('width','24.5%');
    $('.page-name-Z10N_2 .col-md-4').css('width','24.5%');
    
    $('.glyphicon-shopping-cart').removeClass("glyphicon glyphicon-shopping-cart");
   $(".page-name-Z9T_2 .basket-questions input").on("change",function(){
     
     setTimeout(function(){
      if($('.page-name-Z9T_2 .tag_list li:visible').length == 0){
        $('.page-name-Z9T_2').trigger('pageReady');
      }else{
        $('.page-name-Z9T_2').trigger('pageNotReady');
      }
     
     }, 100);
   
  });
    
  $(".page-name-Z9N_2 .basket-questions input").on("change",function(){
     
     setTimeout(function(){
      if($('.page-name-Z9N_2 .tag_list li:visible').length == 0){
        $('.page-name-Z9N_2').trigger('pageReady');
      }else{
        $('.page-name-Z9N_2').trigger('pageNotReady');
      }
     
     }, 100);
   
  });
    
  $(".page-name-Z10N_2 .basket-questions input").on("change",function(){
     
     setTimeout(function(){
      if($('.page-name-Z10N_2 .tag_list li:visible').length == 0){
        $('.page-name-Z10N_2').trigger('pageReady');
      }else{
        $('.page-name-Z10N_2').trigger('pageNotReady');
      }
     
     }, 100);
   
  });
    
    
  $(".page-name-Z10T_2 .basket-questions input").on("change",function(){
     
     setTimeout(function(){
      if($('.page-name-Z10T_2 .tag_list li:visible').length == 0){
        $('.page-name-Z10T_2').trigger('pageReady');
      }else{
        $('.page-name-Z10T_2').trigger('pageNotReady');
      }
     
     }, 100);
   
  });
    
        
    //inne-jakie
    forceAnswer('P3','94',"Proszę wpisać markę");
    forceAnswer('P4','94',"Proszę wpisać markę");
    forceAnswer('Z3','7',"Jaki?");
    forceAnswer('Z4-1','94',"Proszę wpisać markę");
    forceAnswer('Z4-2','94',"Proszę wpisać markę");
    forceAnswer('Z4-3','94',"Proszę wpisać markę");
    forceAnswer('Z4-4','94',"Proszę wpisać markę");
    forceAnswer('Z4-5','94',"Proszę wpisać markę");
    forceAnswer('Z9T_1','6',"Proszę uzupełnić polę");
    forceAnswer('Z9N_1','6',"Proszę uzupełnić polę");
    forceAnswer('Z10T_1','6',"Proszę uzupełnić polę");
    forceAnswer('Z10N_1','6',"Proszę uzupełnić polę");
    forceAnswer('M3','13',"Proszę uzupełnić polę");
    
    
    
    $('.page-name-Z3 .row .n-6 .thumbnail').css("height","300px");
    $('.page-name-Z3 .row .n-7 .thumbnail').css("height","300px");
    $('.page-name-Z9N_1 .row .n-6 .thumbnail').css("height","300px");
    $('.page-name-Z9T_1 .row .n-6 .thumbnail').css("height","300px");
    $('.page-name-Z10N_1 .row .n-6 .thumbnail').css("height","300px");
    $('.page-name-Z10T_1 .row .n-6 .thumbnail').css("height","300px");
    
    

    // HIGHLIGHT'Y
    
    $('.code_s4 .questionText').highlight('miesięcznie'); 
    $('.code_s4 .questionText').highlight('netto');
    $('.code_s4 .questionText').highlight('wszystkich członków Twojego gospodarstwa domowego, włącznie z Tobą');
    $('.code_p1 .questionText').highlight('ekspresów');
    $('.code_p3 .questionText').highlight('ekspresów do kawy');
    $('.code_p4 .questionText').highlight('ekspresów do kawy');
    //$('.page-name-W1 .questionText').highlight('ekspresów do kawy');
    $('.code_z9t .questionText').highlight('dla siebie/do swojego gospodarstwa domowego');
    $('.code_z9n .questionText').highlight('dla siebie/do swojego gospodarstwa domowego');
    $('.code_z10t .questionText').highlight('dla kogoś, np. na prezent');
    $('.code_z10n .questionText').highlight('dla kogoś, np. na prezent');
    //$('.page-name-Z14 .questionText').highlight('ekspres do kawy');
    //$('.page-name-Z14 .questionText').highlight('do Twojego gospodarstwa domowego');
    
  $('.page-name-M2 .questionText').highlight('włącznie z Tobą');
  $('.page-name-Z9T_1 .questionText').highlight('dla siebie/do swojego gospodarstwa domowego');
  $('.page-name-Z9T_2 .questionText').highlight('dla siebie/do swojego gospodarstwa domowego');
  $('.page-name-Z9N_1 .questionText').highlight('dla siebie/do swojego gospodarstwa domowego');
  $('.page-name-Z9N_2 .questionText').highlight('dla siebie/do swojego gospodarstwa domowego');
  $('.page-name-Z10T_1 .questionText').highlight('dla kogoś, np. na prezent');
  $('.page-name-Z10T_2 .questionText').highlight('dla kogoś, np. na prezent');
  $('.page-name-Z10N_1 .questionText').highlight('dla kogoś, np. na prezent');
  $('.page-name-Z10N_2 .questionText').highlight('dla kogoś, np. na prezent');
    
  $('.page-name-Z4-1 .questionText').highlight('kapsułkowy');
  $('.page-name-Z4-2 .questionText').highlight('ciśnieniowy automatyczny');
  $('.page-name-Z4-3 .questionText').highlight('ciśnieniowy kolbowy');
  $('.page-name-Z4-4 .questionText').highlight('przelewowy');
  
  $('.page-name-Z9INFO .questionText').highlight('dla siebie/do swojego gospodarstwa domowego');
  $('.page-name-Z10INFO .questionText').highlight('dla kogoś, np. na prezent');
    
  });
  
  // SURVEY'E
  

  
  Survey.bind('MAM_EKSPRES','group','relevance',function(s){ 
  if(s.data['Z2-1']!= true){ 
    return false;
  }
});
  
//Z8
  

   Survey.bind('Z9T_1','page','relevance',function(s){
 if(s.data['Z8_1-1'] == true || s.data['Z8_1-2'] == true || s.data['Z8_1-3'] == true){ return false; }
     else{return true;}
});
  
  
  
  Survey.bind('Z9T_2','page','relevance',function(s){
   
   if(s.data['Z8_1-1'] == true || s.data['Z8_1-2'] == true || s.data['Z8_1-3'] == true){ return false; }
   else{return true;}
    
     
});

  
    Survey.bind('Z9T_2','page','before',function(s){
   
     var x = s._question('P3');
     var y = parseInt(x[0]);
     if(y == 96 || y == 94){return false;}
      $(".page-name-Z9T_2 .tag_list li").hide();
    for(var i = 0; i<x.length;i++){
      var n = parseInt(x[i]);
            $($(".page-name-Z9T_2 .tag_list li")[n-1]).show();
    }
      
    if(s.data['m1-1'] != true){
         $(".page-name-Z9T_2 .code-Z9T_2-1 .panel-heading").text("Będę rozważać głównie tę markę");
      	 $(".page-name-Z9T_2 .code-Z9T_2-2 .panel-heading").text("Będę poważnie rozważać tę markę");
         $(".page-name-Z9T_2 .code-Z9T_2-3 .panel-heading").text("Mógłbym rozważyć tę markę");
         $(".page-name-Z9T_2 .code-Z9T_2-4 .panel-heading").text("Nie będę rozważać tej marki");
	}else{
         $(".page-name-Z9T_2 .code-Z9T_2-1 .panel-heading").text("Będę rozważać głównie tę markę");
         $(".page-name-Z9T_2 .code-Z9T_2-2 .panel-heading").text("Będę poważnie rozważać tę markę");
         $(".page-name-Z9T_2 .code-Z9T_2-3 .panel-heading").text("Mogłabym rozważyć tę markę");
         $(".page-name-Z9T_2 .code-Z9T_2-4 .panel-heading").text("Nie będę rozważać tej marki");
	}
         
        
});

  
  
   Survey.bind('Z10T_1','page','relevance',function(s){
 if(s.data['Z8_2-1'] == true || s.data['Z8_2-2'] == true || s.data['Z8_2-3'] == true){ return false; }
     else{return true;}
});
  
  
   Survey.bind('Z10T_2','page','relevance',function(s){
     
     if(s.data['Z8_2-1'] == true || s.data['Z8_2-2'] == true || s.data['Z8_2-3'] == true){ return false; }
     else{return true;}
     
});
  
  
Survey.bind('Z10T_2','page','before',function(s){
      
  	 var x = s._question('P3');
     var y = parseInt(x[0]);
     if(y == 96 || y == 94){return false;}
  
      $(".page-name-Z10T_2 .tag_list li").hide();
    for(var i = 0; i<x.length;i++){
      var n = parseInt(x[i]);
            $($(".page-name-Z10T_2 .tag_list li")[n-1]).show();
    }
  
    if(s.data['m1-1'] != true){
         $(".page-name-Z10T_2 .code-Z10T_2-1 .panel-heading").text("Będę rozważać głównie tę markę");
      	 $(".page-name-Z10T_2 .code-Z10T_2-2 .panel-heading").text("Będę poważnie rozważać tę markę");
         $(".page-name-Z10T_2 .code-Z10T_2-3 .panel-heading").text("Mógłbym rozważyć tę markę");
         $(".page-name-Z10T_2 .code-Z10T_2-4 .panel-heading").text("Nie będę rozważać tej marki");
	}else{
         $(".page-name-Z10T_2 .code-Z10T_2-1 .panel-heading").text("Będę rozważać głównie tę markę");
         $(".page-name-Z10T_2 .code-Z10T_2-2 .panel-heading").text("Będę poważnie rozważać tę markę");
         $(".page-name-Z10T_2 .code-Z10T_2-3 .panel-heading").text("Mogłabym rozważyć tę markę");
         $(".page-name-Z10T_2 .code-Z10T_2-4 .panel-heading").text("Nie będę rozważać tej marki");
	}
  
     
});


  Survey.bind('Z9N_1','page','relevance',function(s){
 if(s.data['Z8_1-4'] == true || s.data['Z8_1-5'] == true){ return false; }
    else{return true;}
});
  
  Survey.bind('Z9N_2','page','relevance',function(s){

 	if(s.data['Z8_1-4'] == true || s.data['Z8_1-5'] == true){ return false; }
    else{return true;}
    
});
  
  Survey.bind('Z9N_2','page','before',function(s){
    
     var x = s._question('P3');
     var y = parseInt(x[0]);
     if(y == 96 || y == 94){return false;}
    
      $(".page-name-Z9N_2 .tag_list li").hide();
    for(var i = 0; i<x.length;i++){
      var n = parseInt(x[i]);
            $($(".page-name-Z9N_2 .tag_list li")[n-1]).show();
    }
    
  if(s.data['m1-1'] != true){
         $(".page-name-Z9N_2 .code-Z9N_2-1 .panel-heading").text("Rozważałbym głównie tę markę");
         $(".page-name-Z9N_2 .code-Z9N_2-2 .panel-heading").text("Poważnie rozważałbym tę markę");
         $(".page-name-Z9N_2 .code-Z9N_2-3 .panel-heading").text("Mógłbym rozważyć tę markę");
         $(".page-name-Z9N_2 .code-Z9N_2-4 .panel-heading").text("Nie rozważałbym tej marki");
  }else{
         $(".page-name-Z9N_2 .code-Z9N_2-1 .panel-heading").text("Rozważałabym głównie tę markę");
         $(".page-name-Z9N_2 .code-Z9N_2-2 .panel-heading").text("Poważnie rozważałabym tę markę");
         $(".page-name-Z9N_2 .code-Z9N_2-3 .panel-heading").text("Mogłabym rozważyć tę markę");
         $(".page-name-Z9N_2 .code-Z9N_2-4 .panel-heading").text("Nie rozważałabym tej marki");
  }
    
    
});

Survey.bind('Z10N_1','page','relevance',function(s){
 if(s.data['Z8_2-4'] == true || s.data['Z8_2-5'] == true){ return false; }
    else{return true;}
});
  
Survey.bind('Z10N_2','page','relevance',function(s){
 
 	if(s.data['Z8_2-4'] == true || s.data['Z8_2-5'] == true){ return false; }
    else{return true;}
  
});

Survey.bind('Z10N_2','page','before',function(s){
  	
  	 var x = s._question('P3');
     var y = parseInt(x[0]);
     if(y == 96 || y == 94){return false;}
      $(".page-name-Z10N_2 .tag_list li").hide();
    for(var i = 0; i<x.length;i++){
      var n = parseInt(x[i]);
            $($(".page-name-Z10N_2 .tag_list li")[n-1]).show();
    }
  
    if(s.data['m1-1'] != true){
         $(".page-name-Z10N_2 .code-Z10N_2-1 .panel-heading").text("Rozważałbym głównie tę markę");
      	 $(".page-name-Z10N_2 .code-Z10N_2-2 .panel-heading").text("Poważnie rozważałbym tę markę");
         $(".page-name-Z10N_2 .code-Z10N_2-3 .panel-heading").text("Mógłbym rozważyć tę markę");
         $(".page-name-Z10N_2 .code-Z10N_2-4 .panel-heading").text("Nie rozważałbym tej marki");
	}else{
         $(".page-name-Z10N_2 .code-Z10N_2-1 .panel-heading").text("Rozważałabym głównie tę markę");
         $(".page-name-Z10N_2 .code-Z10N_2-2 .panel-heading").text("Poważnie rozważałabym tę markę");
         $(".page-name-Z10N_2 .code-Z10N_2-3 .panel-heading").text("Mogłabym rozważyć tę markę");
         $(".page-name-Z10N_2 .code-Z10N_2-4 .panel-heading").text("Nie rozważałabym tej marki");
	}
  
  
});

  
//Ekspresy logika
  
  //kapsolkowy
Survey.bind('Z4-1','page','relevance',function(s){  
 if(s.data['Z3-1'] != true){ return false; }
});  
  

  
  
  // cisnieniowy

  Survey.bind('Z4-2','page','relevance',function(s){
 if(s.data['Z3-2'] != true){ return false; }
});  

  
  
  //kolbowy
  Survey.bind('Z4-3','page','relevance',function(s){
 if(s.data['Z3-3'] != true){ return false; }
});  

  
  
  //przelewowy
Survey.bind('Z4-4','page','relevance',function(s){
 if(s.data['Z3-4'] != true){ return false; }
});  

  
   //Kawiarka
Survey.bind('Z4-5','page','relevance',function(s){
 if(s.data['Z3-5'] != true){ return false; }
});  

  
  
/*  
  Survey.bind('Z6','page','before',function(s,pi,po){ 
      var text = $('.code_z4').find('input:checked').parent().find('.in').html();
      var newtext = $('.code_z6 .questionText').text().replace('x',text); 
      $('.code_z6 .questionText').text(newtext);
  });
  
    Survey.bind('Z7','page','before',function(s,pi,po){
      var text = $('.code_z4').find('input:checked').parent().find('.in').html();
      var newtext = $('.code_z7 .questionText').text().replace('x',text); 
      $('.code_z7 .questionText').text(newtext);
  });
*/  

  
//Koniec ekspresy logika 
  
Survey.bind('W1','page','before',function(s,pi,po){
  
  
  //==================================================================================
  

  //s._show($('.page-name-W1').find('.col-1,#header-W1-1,#fheader-W1-1'));
  
  
  //==================================================================================
   	$('.page-name-W1 .last-row').show();
  
    var order = [2,7,3,8,9];
	fisherYates(order);
    order.push(1);

  
    for(o in order){
      var check = order[o];
        var actual = 6-$('.page-name-W1 .first-row .removed,.page-name-W1 .first-row .hidden').length;
        if(actual > 5){
            var checkBrand = $('#header-W1-'+check).hasClass('removed') || $('#header-W1-'+check).hasClass('hidden');
            if(!checkBrand){
                var index = $('#header-W1-'+check).index()+1;
          s._remove($(".page-name-W1 table td:nth-child(" + index + "),.page-name-W1 table th:nth-child(" + index + ")"));
            }
        }
    	
      		if(actual == 0){
      			return false;
      		}
    }
  
});
 
Survey.bind('W1_1','page','before',function(s,pi,po){
 var arr = [];
  
  $('.page-name-W1 .first-row .removed,.page-name-W1 .first-row .hidden').each(function(a,b){
		 arr.push($(this).getValueN());
  });
 
  for(i in arr){
   var check = parseInt(arr[i]);
   var index = $('#header-W1-'+check).index()+1;
   console.log(check,index);
   s._remove($(".page-name-W1_1 table td:nth-child(" + index + "),.page-name-W1_1 table th:nth-child(" + index + ")"));
  }
  
  if(arr.length >= 6){
    return false;
  }
  
}); 

  
Survey.bind('W1_U','page','before',function(s,pi,po){

var arr = [];
$('.page-name-W1 .first-row').children().each(function(a,b){
if(a >0 && $(this).is(':visible')){
 arr.push($(this).attr("id").split("-")[2])
}
})
$('.page-name-W1_U .open-limit').val(arr.toString()).trigger('change');
  
return false;
  
}); 

 
Survey.bind('ZNAM','group','relevance',function(s){ 
  if(s.data['P3-96']== true){ 
    return false;
  }
});
  
  
// Wrzesień
  
Survey.bind('Z4a','page','relevance',function(s,pi,po){ 
  
  
  	var kaps = giveN('Z4-1'),
        cis = giveN('Z4-2'),
        kolb = giveN('Z4-3'),
        przel = giveN('Z4-4'),
        kaw = giveN('Z4-5'),
        agregator = [kaps,cis,kolb,przel,kaw],
		controler = []
    
    	console.log(agregator)
    
    	agregator.forEach(function(a,b){
			var obj = {}
			obj.type = b
			obj.type_name = types[b].name
			obj.nka = a
			obj.marka = marki[a].name
			obj.marka_photo = marki[a].img
			obj.type_photo = types[b].img
            controler.push(obj)
            $(po).find('.n-'+(b+1)).find('.in').text(obj.type_name + " marki "+ obj.marka)
			$(po).find('.n-'+(b+1)).data({type:(b+1),nka:a})
			console.log($(po).find('.n-'+(b+1)).data())
			$(po).find('.n-'+(b+1)).find('.control-label').append('<div class="img_conteiner_Z4"></div>')
            $(po).find('.n-'+(b+1)).find('.img_conteiner_Z4').append($('<img>').attr('src',obj.type_photo).css('width','15%'))
			$(po).find('.n-'+(b+1)).find('.img_conteiner_Z4').append($('<img>').attr('src',obj.marka_photo).css('width','15%'))
			if(obj.nka == 99){
				s._remove($(po).find('.n-'+(b+1)))
			}		
		})

		console.log(controler)
});  
  
Survey.bind('Z4aH','page','relevance',function(s,pi,po){  
 var typ = $('.page-name-Z4a').find('.answer:checked').parents('.question-row').data().type,
	 nka = $('.page-name-Z4a').find('.answer:checked').parents('.question-row').data().nka
	 $(po).find('.open-limit').val(typ+";"+nka).trigger("change")  	
     return false;
});
  
 
  Survey.bind('Z6','page','before',function(s,pi,po){ 
      var text = $('.code_z4a').find('input:checked').parent().find('.in').html();
      var newtext = $('.code_z6 .questionText').text().replace('X',text); 
      $('.code_z6 .questionText').text(newtext.toLowerCase());
  });
  
    Survey.bind('Z6A','page','before',function(s,pi,po){
      var text = $('.code_z4a').find('input:checked').parent().find('.in').html();
      var newtext = $('.code_z6a .questionText').text().replace('X',text); 
      $('.code_z6a .questionText').text(newtext.toLowerCase());
  });  

  
 Survey.bind('Z6B','page','before',function(s,pi,po){
      var marki_Z6B = []
      var typy_Z6B = []
      
      $('.page-name-P3').find('.answer:checked').parents('.question-row').each(function(){
			var n = $(this).getValueN()
			if(n != 99){
				marki_Z6B.push(marki[n].name)
			}
	  })
      /*
      $('.page-name-Z3').find('.answer:checked').parents('.question-row').each(function(){
			var n = $(this).getValueN()
			if(n != 99){
				typy_Z6B.push(types[(n-1)].name)
			}
	  })
      */
      for(i in types ){
    		typy_Z6B.push(types[i].name)
		}
   		
   		
   		marki_Z6B.push("nie pamiętam")
        typy_Z6B.push("nie pamiętam")
        
        
      marki_Z6B.forEach(function(a,b){
        	var val = a;
			var html_el = '<option value="'+a+'">'+a+'</option>'
            $(po).find('.col_2').append(html_el)
		})
      
      typy_Z6B.forEach(function(a,b){
        	var val = a;
			var html_el = '<option value="'+a+'">'+a+'</option>'
            $(po).find('.col_1').append(html_el)
		})
      
      
      for(var i = 1; i <= 10; i++){
		 $('.page-name-Z6B').find('table tbody tr').first().clone().appendTo($('.page-name-Z6B').find('table'))		
	  }
   
   	  $(po).find('table tbody tr').each(function(a,b){
        	if(a>0){
				$(this).hide()
				$(this).find('td').eq(0).text("Następny ekspres")
			}
        	
			$(this).find('select').each(function(x,y){
				if(a>0 && x < 1){ //x odpowiada za to czy się pojawia tylko w markach wykluczająca
					$(this).find($('option[value="nie pamiętam"]')).text('nie miałem/ am więcej ekspresów').attr('name',"nie miałem/ am więcej ekspresów").val("wyklucz")
				}
			})
	  })
      
      var block = function(el){
          $('.page-name-Z6B').find('select').prop('disabled',true)
          $('.page-name-Z6B').find('select').parents('td').css('background','#F5F5F5')
          $(el).prop('disabled',false)
          $(el).parents('td').css('background','#dff0d8')
		  $('.page-name-Z6B').trigger('pageReady');

      }

      var unblock = function(el){
          $('.page-name-Z6B').find('select').prop('disabled',false)
          $('.page-name-Z6B').find('select').parents('td').css('background','white')
          $('.page-name-Z6B').trigger('pageNotReady');
      }
      
      var shower = function(){
          $('.page-name-Z6B').find('tbody tr').each(function(a,b){
          var one = $(this).find('select').eq(0).val()
          var two = $(this).find('select').eq(1).val()
              if((one != "default_type" && two !=  "default_mark") && (one != "wyklucz" && two != "wyklucz")){
                  //console.log("OK")
                  $(this).closest('tbody tr').next().show()
              }else{
				  $(this).closest('tbody tr').next().find('select').eq(0).val("default_type")
				  $(this).closest('tbody tr').next().find('select').eq(1).val("default_mark")
                  $(this).closest('tbody tr').next().hide()
              }
          })
      }

      $('.page-name-Z6B').find("select").each(function (i, el) {
                 $(el).on('change',function(){
							 shower();
                             if($(this).val() == "wyklucz")block($(this))
                             else unblock()
                 })
      });
      
  }); 
  
</script>
<style type="text/css" media="screen">
     .page-name-Z9T_1 .row:nth-child(-n+6)>.hasImage>.thumbnail{
  height:510px ;
  }
  
       .page-name-Z9N_1 .row:nth-child(-n+6)>.hasImage>.thumbnail{
  height:510px ;
  }
  
    .page-name-Z10N_1 .row:nth-child(-n+6)>.hasImage>.thumbnail{
  height:510px ;
  }
  
    .page-name-Z10T_1 .row:nth-child(-n+6)>.hasImage>.thumbnail{
  height:510px ;
  }
   .page-name-Z3 .row:nth-child(-n+6)>.hasImage>.thumbnail{
  height:510px ;
  }
  
  .mydiv-img{width:100%}
  
  #mydiv {
    overflow: auto;
    max-height: 600px;
}
</style>
