// POMIJA CAŁĄ GRUPE
Survey.bind('WPK','group','relevance',function(s){ 
  if(s.data['S6-1']!= true){ // JEŻELI S6-1 JEST ZAZNACZONE TO OMIJA CAŁĄ GRUPE WPK
    return false;
  }
});

// UKRYWANIE GRUPY 
Survey.bind('WIZERUNEK','group','relevance',function(s){ return false; });

// P3 SIĘ NIE WYŚWIETLA JEŻELI W P2 ZAZNACZYLIIŚMY 2 ODPOWIEDŹ
Survey.bind('P3','page','relevance',function(s){
  if(s.data['P2-2'] == true) {
  return false;
  }
});

// P16 SIĘ NIE WYŚWIETLI JEŻELI NIE ZAZNACZYMY INNE WARTOŚCI NIŻ P12 ODP 2
Survey.bind('P16','page','relevance',function(s){
  if(s.data['P12-2'] != true) {
  return false;
  }
});

//P27 WYŚWIETLA SIĘ JESŻELI W P13 JEST ZAZNACZONE P13a-2 LUB W P13b JEST ZAZNACZONE 10 POLE 
Survey.bind('P27','page','relevance',function(s){
  if((s.data['P13a-2'] == true)||(s.data['P13b-10'] == true)) {
  return true;
  }
  else{
    return false;
  }
});

//Q23a NIE WYŚWITLA SIĘ JEŻELI Q22-97 JEST ZAZNACZONE I NIE WYŚWIETLA SIĘ GDY JEST ZAZNACZONA INNA WARTOŚĆ
//NIŻ Q22-1
Survey.bind('Q23a','page','relevance',function(s){
  if(s.data['Q22-97'] == true){
    return false;
  }
  if(s.data['Q22-1'] != true){
    return false;
  }    
});

// Wyświetlanie wszystkich odpowiedzi w tablicy.
console.log(s._question('S3'));

//Befora używamy do manipulowania relacją między bazą a bazą ale nie w sensie czy się wyświetla czy nie tylko co się dzieje z poszczególnymi pytaniami.
Survey.bind('R6a','page','before',function(s){
    var people = parseInt(s._question('R2')[0]); // pobieram wartość przez parsa odpowiedzi w R2
      $('.page-name-R6a .question').each(function(a,b){ // dla każdej odpowiedzi z R6a (index, wartość)
      if((a+1)>people){ // jeśli index(od zera czyli + 1) jest większy od people
      Survey._remove(b); // usuń wartość
      }
    }); 
});