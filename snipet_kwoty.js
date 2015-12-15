// Sprawdzanie czy respondent mieści się w przedziale wieku

if($_p==2):
	$wiek = $this->_a('S2_WIEK'); // tworzymy dodatkowe pole 'S2_WIEK'
	if($wiek < 18 || $wiek > 59):
		$quote = false;
	endif;
endif;

$wiek = $this->_a('S2_WIEK'); // robimy zmienną

	if($wiek >= 18 && $wiek <= 24):
		$quote[] = '18_24';
	elseif($wiek >= 25 && $wiek <= 29):
		$quote[] = '25_29';
	elseif($wiek >= 30 && $wiek <= 39):
		$quote[] = '30_39';
	elseif($wiek >= 40 && $wiek <= 49):
		$quote[] = '40_49';
	elseif($wiek >= 50 && $wiek <= 59):
		$quote[] = '50_59';
	endif;
	
// KWOTOWANIE MIEJSCA ZAMIESZKANIA

	if($this->_a('S4-1')): $quote[] = 'm_wies'; endif;
	if($this->_a('S4-2')): $quote[] = 'M_do_20'; endif;
	if($this->_a('S4-3')): $quote[] = 'M_20_50'; endif;
	if($this->_a('S4-4')): $quote[] = 'M_50_100'; endif;
	if($this->_a('S4-5')): $quote[] = 'M_100_200'; endif;
	if($this->_a('S4-6')): $quote[] = 'M_200_500'; endif;
	if($this->_a('S4-7')): $quote[] = 'M_pow500'; endif;
	
// KWOTOWANIE REGIONU
	if($this->_a('S5-02')): $quote[] = 'r_poludniowo_zachodni'; endif;
	if($this->_a('S5-04')): $quote[] = 'r_polnocny'; endif;
	if($this->_a('S5-06')): $quote[] = 'r_wschodni'; endif;
	if($this->_a('S5-08')): $quote[] = 'r_polnocno_zachodni'; endif;
	if($this->_a('S5-10')): $quote[] = 'r_centralny'; endif;
	if($this->_a('S5-12')): $quote[] = 'r_poludniowy';endif;
	if($this->_a('S5-14')): $quote[] = 'r_centralny'; endif;
	if($this->_a('S5-16')): $quote[] = 'r_poludniowo_zachodni'; endif;
	if($this->_a('S5-18')): $quote[] = 'r_wschodni';endif;
	if($this->_a('S5-20')): $quote[] = 'r_wschodni'; endif;
	if($this->_a('S5-22')): $quote[] = 'r_polnocny'; endif;
	if($this->_a('S5-24')): $quote[] = 'r_poludniowy'; endif;
	if($this->_a('S5-26')): $quote[] = 'r_wschodni'; endif;
	if($this->_a('S5-28')): $quote[] = 'r_polnocny'; endif;
	if($this->_a('S5-30')): $quote[] = 'r_polnocno_zachodni'; endif;
	if($this->_a('S5-32')): $quote[] = 'r_polnocno_zachodni'; endif;
	
// KWOTOWANIE WYKSZTAŁCENIA 
	if($this->_a('S3-1')): $quote[] = 'w_ponizej_sredniego'; endif;
	if($this->_a('S3-2')): $quote[] = 'w_ponizej_sredniego'; endif;
	if($this->_a('S3-3')): $quote[] = 'w_ponizej_sredniego'; endif;
	if($this->_a('S3-4')): $quote[] = 'w_ponizej_sredniego'; endif;
	if($this->_a('S3-5')): $quote[] = 'w_ponizej_sredniego'; endif;
	if($this->_a('S3-6')): $quote[] = 'w_srednie_powyzej'; endif;
	if($this->_a('S3-7')): $quote[] = 'w_srednie_powyzej'; endif;
	if($this->_a('S3-8')): $quote[] = 'w_srednie_powyzej'; endif;
	if($this->_a('S3-9')): $quote[] = 'w_srednie_powyzej'; endif;
	if($this->_a('S3-10')): $quote[] = 'w_srednie_powyzej'; endif;
	if($this->_a('S3-11')): $quote[] = 'w_srednie_powyzej'; endif;
	if($this->_a('S3-98')): $quote[] = 'w_srednie_powyzej'; endif; 
	
// WARUNEK KOŃCZĄCY ANKIETE JEŻELI ILOŚĆ ODPOWIEDZI JEST MIEJSZA NIŻ 5

if(count($quote)<5):
		$quote = false;
	endif;
	
// Kończenie ankiet jeśli jakis tam warunek

if($_p==6):

	/*jakieś tam inne warunki
	*/
	
	$driveCard = $this->_a('S6-5'); //W TYM WYPADKU JEŚLI WYBRANO Z PYTANIA S6 ODP NR 5 I THE END.
	if($driveCard == true):
		$quote = false;
	endif;
		
endif;