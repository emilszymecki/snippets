questy: 

mvoqr6 - Kwestionariusz Badania Platformy Megarodzinka :


// $(".page-name-P17 .table").floatThead();

$('#header-P15-1').html($('<img>').attr('src','http://cdn3.pollster.pl/badania/assets/546/rodzina%20orange.png')); // do #header-P15-1 wstawia img z attr src.
$('.page-name-P15 img').width('240'); // ustawia szerokość na 240 dla każdego img
$('.page-name-P15 th').addClass('vcenter'); / dla każdego th dodaje clase 'vcenter'

  	$('.page-name-P17 .custom_page_row').each(function(){ //dla każdego elementu z pola P17
    	
      	var n = $(this).getValueN(); // podaje nume iteracji
      	var img = $('<img>').attr('src','http://cdn3.pollster.pl/badania/assets/546/'+n+'.png'); // tworzy zmienną img gdzie trafia numerek iteracji ("n")
      
      	img.width('130'); // ustawiam wartość szerokośći zdjęcia dla zmiennej img na 130
      
      	$(this).find('td:first').html(img); // znajduje pierwsą kolumnę i wciskam do niej img
      
    });

q1vgxe - Segmentacja Eska TV :
	// !!! P11 tam są shuffle_rows'y 
    $('.shuffle_rows_123, .shuffle_rows_122, .shuffle_rows_135').each(function(){ // przelatuje po każdym elemencie .shuffle_rows_*
      	
      	var td = $(this).find('td:first'); // ustawiamy zmienną td która wyszukuje pierwszego td'ka
      	var newText = $(td).text().replace('(','<span class="sub">').replace(')','</span>'); // na tym td(zmienna) text() zastępujemy replace() tym co w nawiazsach
      	$(td).html(newText);// do pierwszego tdeka wciskam newText
     	  
    });



      Survey.bind('GRUPA','page','relevance',function(s){  
    
	var sub4A = s.data['S12-4'] || s.data['S12-5'] || s.data['S12-10'] || s.data['S12-14'] || s.data['S12-16'] || s.data['S12-17']; // daje nam true albo false
	var sub4B = s.data['S14-7'] || s.data['S14-8'] || s.data['S14-9'] || s.data['S14-10']; // daje nam true albo false
   	if(s.data['P4_2-5'] && !s.data['P5_2-5']){ $('#option_17123').prop('checked',true); } // jeżeli są true to ustawiam #option_17123 jako zaznaczone
   	if(!s.data['P4_2-5'] && !sub4A && !sub4B){ $('#option_17124').prop('checked',true); } // -||-
   	var ischurn = false;
    if(s.data['P5_2-5']){ $('#option_17125').prop('checked',true); ischurn = true; } // -||-
	if(!s.data['P4-5'] && (sub4A && sub4B) && !ischurn){ $('#option_17126').prop('checked',true); } // -||-
    return false;
  
  });

  Survey.bind('PS3','page','relevance',function(s){ 
    
    var age = parseInt($('.code_s2_wiek input').val()); // Wyciągam wiek
    
    if(age < 18){ // jeśli wiek jest miejszy niż 18
    	
      s._remove($('#code-PS3-2')); // to usuwam element
      s._remove($('#code-PS3-3')); // to usuwam element
      s._remove($('#code-PS3-7')); // to usuwam element
      s._remove($('#code-PS3-8')); // to usuwam element
    
    }
    
    return true;
  
  });


    Survey.bind('P7_1','page','relevance',function(s,pi,po){  
  	
  	$(po).find('.custom_page_row').each(function(){
    	var n = $(this).getValueN();
      	if(!s.data['P6-'+n+'-1']){
        	s._remove($(this));
        }
    });	




mntvcs - Mindshare Multiscreening 

$('.page-name-M2 .questionText').highlight('NA KOMPUTERZE'); // POGRUBIENIE TEKSTU W PYTANIU


//MAKS
Survey.bind('M2','page','relevance',function(s,pi,po){ 

		if(s.data['M1-5-6']){
			$(po).find('.table tr').find("td:nth-child(7)").each(function(){ $(this).find('input').prop('checked',true).trigger('change'); });
			return false;
		}

	});

Survey.bind('M2','page','before',function(s,pi,po){ // działamy na M2
       
	if(s.data['M1-2-6']){ s._remove($('#code-M2-4')); } // jeżeli zaznaczyliśmy w M1 -> M1-2-6 to usuwamy cał rządek to M2-4 
	if(s.data['M1-4-6']){ s._remove($('#code-M2-8')); } // jeżeli zaznaczyliśmy w M1 -> M1-4-6 to usuwamy cał rządek to M2-8

});

Survey.bind('M11','page','before',function(s,pi,po){ // działamy na M11
       
	$(po).find('.custom_page_row').each(function(){ // szukamy custom_page_row i działamy na każdym jego elemencie
		var n = $(this).getValueN(); // n indeks elementu
		if(!s.data['M10-'+n+'-1']){ // jeżeli elementy z M10-n-1 nie są zaznaczone :checked
			s._remove($(this)); //to je usuń z M11
		}
	});

	if($(po).find('.hidden,.removed').length == $(po).find('.custom_page_row').length) { return false; } // jeżeli elementów o klasie hidden lub .removed jest tyle samo (badamy length'em) co wszystkich elementów w .//custom_page_row to ukrywamy pytanie 
		// PUENTA: musi być coś zaznaczone w M10-x-1 czyli w pierwszej kolumnie aby było widać M11
});


Survey.bind('M30_1','page','before',function(s,pi,po){ 
	$(po).find('.list-group-item').each(function(){ // dla każdego elementu .list-group-item
		var n = $(this).getValueN(); // ZWRACA N-KIE Z OPCJI
		if(!s.data['M10-'+n+'-2']){ // jeżeli w M10-n-2 - czyli każda inna niż  2 odpowiedź jest inna
			s._remove($(this)); // usuwaj to 
		}
	});
	$('#sort-2447').trigger('sortupdate');
    if($(po).find('.drag-source .hidden,.drag-source .removed').length >= 9){ return false; }
});


pmunjm - mBank 
//Maks
Survey.bind('P27','page','before',function(s,pi,po){ 
		$(po).trigger('pageNotReady');

	});
  
    Survey.bind('P31','page','before',function(s,pi,po){ 
      	var random = Math.random();
      
      
      
		$(po).find('.custom_page_row').shuffleByKey(random);
      	$("#page-43").find('.custom_page_row').shuffleByKey(random);
      	$("#page-44").find('.custom_page_row').shuffleByKey(random);
      	$("#page-45").find('.question-row').shuffleByKey(random);

	});

Ankieta 440: Badanie telewizyjne POLO TV



n5c0wk - Ankieta 444: Beeline Wrocław
// Maksiu

	Survey.bind('S10','page','relevance',function(s){ 
			console.log('S10 relev');
		for (var i = 4; i <= 5; i++) { // od czwórki
			for (var j = 1; j <= 4; j++) { // od jedynki do czwórki
				console.log('S9-'+j+'-'+i);
				console.log(s.data['S9-'+j+'-'+i]);
				if(s.data['S9-'+j+'-'+i]){ // jeżeli j <= 4 i <=5 to nie wyświetlaj
					return false;
				}
			}; // PUENTA JEŻELI ZOSTAŁO COŚ ZAZNACZONE DALEJ _4_1 I WYŻEJ TO DAJEMY FALSE
		};
		if(s.data['S11-20']){
			return false;
		}

	});

//
Survey.bind('U5','page','before',function(s,pi,po){
	$(po).find('.list-group-item').each(function() { // znajduje .list-group-item i działa na każdym jego elemencie 
		var n = $(this).getValueN(); // wyciąga iteracje 
		if(!s.data['U4-'+n]){ // jeżeli element jest inny niż zaznaczony 
			s._remove($(this)); // to wyrzuc 
		}
	});
	$('#sort-6688').trigger('sortupdate'); // sortuje 
	if($(po).find('.drag-source .hidden,.drag-source .removed').length >= 17){ return false; } // jeżeli ilość elementów ukrytych jest większa od 17 to ukryj pole 
	});

w7savs - Ankieta 442: Mindshare Telekomy - listopad

