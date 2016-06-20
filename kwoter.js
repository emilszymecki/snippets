function w(n){

var x = {
'Kobieta':	1823
,'Mężczyzna':	1777	
,'15 - 24':	537
,'25 - 34':	734
,'35 - 44':	691
,'45 - 54':	572
,'55 - 64':	670
,'65 - 74':	396	
,'Wieś':	1393
,'Miasto do 20 tys':	465
,'Miasto 21-50 tys':	401
,'Miasto 51-100 tys':	299
,'Miasto 101-200 tys':	269
,'Miasto 201 -500 tys':	351
,'Powyżej 500 tys':	422	
,'podstawowe':	637
,'gimnazjalne':	108
,'zasadnicze':	882
,'srednie':	1282
,'wyzsze':	691
,'Dolnośląskie':	276
,'Kujawsko-pomorskie':	195
,'Lubelskie':	201
,'Lubuskie':	95
,'Łódzkie':	237
,'Małopolskie':	312
,'Mazowieckie':	497
,'Opolskie':	96
,'Podkarpackie':	198
,'Podlaskie':	112
,'Pomorskie':	212
,'Śląskie':	435
,'Świętokrzyskie':	119
,'Warmińsko-mazurskie':	134
,'Wielkopolskie':	320
,'Zachodniopomorskie':	161
}
	
$("#QuoteName").val(Object.keys(x)[n]);
$("#QuoteCount").val(x[Object.keys(x)[n]]);	


$(".submit input").trigger("click");
}
