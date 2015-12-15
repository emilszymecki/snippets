// daje na początku wartość 19 i ogranicza texboxa do 4 znaków 
$('.page-name-M2 .form-control').val("19").attr('maxlength','4');

// Przykład filtra
$('.page-name-P11 .form-control').attr('maxlength','2'); // blokada na dwa znaki   
$('.page-name-P11 .alert-info').hide(); // ukrywam alert 
$('.page-name-P11 .open-limit:first').bind('propertychange change click keyup input paste',function(){ // binduje zdarzenia i wywołuje funkcje
      
        var val = parseInt($(this).val()); // wyciagam wartości z pola i ze stringa robie inta
      
        if(val != NaN){ // sprawdzam czy val jest różny od NaN
          if(val >=1 && val <= 10){ /* sprawdzam czy val pomimo że nie jest
        NaN to jesszcze ustawia warunek brzegowy między 1 a 10*/
              if(val >= 3){ // jeżli val >= 3 to

                  $('.page-name-P11 .alert-info').show(); // pokazuje alert

                  }else { // jeżeli val <3 to :

                      $('.page-name-P11 .alert-info').hide(); // chowa alert
                      $('.page-name-P11').trigger('pageReady'); /*status strony na page ready 
                      i button robi się zielony*/
                     }
            }
          else{ // jeżeli val <1 i val >10
            $('.page-name-P11').trigger('pageNotReady'); // to strona jest nie aktywna
          }

        }
      
    });


//PODWOJNY ALERT

$('.page-name-P26 .alert-info').hide();
$('.page-name-P26 .open-limit:first').bind('propertychange change click keyup input paste',function(){
        
        if($(this).val().length <= 2){ return false; }

        var val = parseInt($(this).val());
        var agePlus = parseInt($('.page-name-M2 .form-control').val()) + 15;
        var reduce = val - agePlus;

        var alert1 = false;
        var alert2 = false;

        if(reduce < 0){ alert2 = true; }

      
        if(val != NaN){
          if(val < 1900 || val > 2015){
            alert1 = true;
          }
          if(val < 1985){ 
            alert1 = true;
          }
        }

        if(alert1 || alert2){

          $('.code_p26 .alert span').hide();
          $('.code_p26 .alert').show();

          if(alert1){ $('.code_p26 .firstAlert').show(); }
          if(alert2){ $('.code_p26 .secondAlert').show(); }

          $('.page-name-P26').trigger('pageNotReady');

        }else{

          $('.page-name-P26 .alert-info').hide();
          $('.page-name-P26').trigger('pageReady');

        }
      
}); 

//pogrubianie treści pytania 

$('.page-name-S1 .questionText').highlight('produktów na bolesne problemy w jamie ustnej');

//Ustawianie blokay i limitowanie 
	$('.page-name-R4a .open-limit').attr('maxlength','3'); // atrybut  ustawiający maksymalną liczbę znaków na 3
	$(".page-name-R4a .open-limit").ForceNumericOnly(); // odpalenie funkcji ForceNumericOnly
	$('.page-name-R4a .open-limit:first').bind('propertychange change click keyup input paste',function(){ // bindowanie
	  var ready = true; // ustawienie ready na true jako wartośc domyślną
		var val = parseInt($(this).val()); // pobieranie do vala tego co zostało wpisane w pole 
		
	  if(val < 1 || val > 110){ ready = false; } // jeśli val jest miejszy od 1 i > od 110 to true na false
	  if(!val){ ready = false; } // jeżeli sam val nie jest true a ForceNumericOnly wymaga żeby była to liczba to ready też false
		
	  if(ready){ // jeśli ready true 
		  $('.page-name-R4a').trigger('pageReady'); // to strona jest page ready
			}else{ // jeżeli ready nie true 
				$('.page-name-R4a').trigger('pageNotReady'); // to page ready false
			}
	});

//Ustawianie blokady dla każdego pytania otwartego

  $(".page-name-R6 .open-limit").ForceNumericOnly(); // odpalenie funkcji blokujące inne znaki niż [0-9]
  $(".page-name-R6 .open-limit").bind('propertychange change click keyup input paste',function(){ // bindowanie zdarzenia
        
      var ready = true; // ready na true 
      $(".page-name-R6 .open-limit").each(function(){ // lecimy po każdym elemencie
          
          var visible1 = $(this).parents('.input-group').hasClass('removed'); // sprawdza czy .input-group ma klase hasClass('removed') True or False
          var visible2 = $(this).parents('.input-group').hasClass('hidden');//  sprawdza czy .input-group ma klase hasClass('hidden') True or False
          
            if(!visible1 && !visible2){ // jeżeli obie są false
        var val = parseInt($(this).val()); // to pobieraj od thisa wartość i przepuszczamy ją przez parseInt a pamiętajmy że lecimy po każdym elemencie
          if(val < 1 || val > 110){ ready = false; } // warunki brzegowe i robimy false
            if(!val){ ready = false; } // warunki brzegowe i robimy true 
            }
          
        });
      
    if(ready){ // sprawdzamy jakie jest ready jakie jest true to:
      $('.page-name-R6').trigger('pageReady'); // page ready na true 
        }else{ // jak nie 
            $('.page-name-R6').trigger('pageNotReady'); // to not ready
        }
    
   });
  