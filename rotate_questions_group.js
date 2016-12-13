function group_rotate(po,q,block){

//funkcja przesuwająca element w tablicy
	function arraymove(arr, fromIndex, toIndex) { 
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
	}

	var arr_grp = {}; // zmianna agregująca pytania w konkretne grupy
    var obj_stack = []; // stos z grupami
  	var parent; // rodzic elementu

    $(po).find('.question-row').each(function(a,b){  // pętla po odpowiedziach
        var id = $(this).getValueN(); // pobieranie N'ki konkretnej odpowiedzi
        var question_group = q[id]; // do jakiej grupy należy konkretna N'ka
        $(this).data({"id":id,"group":question_group}); // dopisyawanie .data() id i grupy do każdego pytania
        if(arr_grp[question_group] == undefined){ // jeżeli w agregacie nie ma konkretnej grupy ..
           arr_grp[question_group] = [$(this)]; // to stwórz klucz grupy którego wartością jest konkretna odpowiedź
        }else{ // jeśli klucz z grupą już jest
            arr_grp[question_group].push($(this)); // to dodaj kolejną odpowiedź
		}
        parent = $(this).parent(); //parenta nadpisuj;
        $(this).remove(); // usuj konkretną odpowiedź
    });

     for(var o in arr_grp){
		if(o != "end"){
			obj_stack.push(o); // grupy za wyjątkiwm n umieś w tablicy  obj-stack
		}
      }

      fisherYates(obj_stack); // mieszaj elementy w tablicy
      obj_stack.push("end"); // wstaw na koniec grupę end

      for(var i = 0; i < obj_stack.length; i++){ // iterujemy po każdym elemencie ze stosu zawierających nazwy grupy
      	var group_array_single = arr_grp[obj_stack[i]]; // zmienna pomocnicza <- obiekt nazwa grupy = [tablica z pytaniami]
            group_array_single.map(function(x,y){ // lecimy po tablicy z pytaniami
                if(block.indexOf(parseInt(x.getValueN())) != -1){ // jeżeli elementu jest w tablicy z elementami które mają być na początku danej grupy
                arraymove(group_array_single, y , 0); // wypchnij element na przód tablicy.
                }
            });
			group_array_single.map(function(a,b){
            	$(parent).append(a); // wypychaj elementy z grupy w kolejności na tapetę 
            });
        if($(po).find('.question-row').parent().hasClass('row')){
        	$(po).find('.question-row').last().after('<div class="col-md-12"></div>'); // jak wypchniesz wszyskie elementy z danej grupy to dodaj separator (pusta linia)
        }
      }

} 

//Przykład wywołania 

Survey.bind('O3','page','before',function(s,pi,po){ 
        
  var grp = {
   1:'1'
  ,2:'1'
  ,3:'1'
  ,4:'2'
  ,5:'2'
  ,6:'2'
  ,7:'3'
  ,8:'3'
  ,9:'3'
  ,10:'4'
  ,11:'4'
  ,12:'5'
  ,13:'5'
  ,14:'6'
  ,15:'7'
    ,16:'end'
    ,17:'end'
  };
    
      group_rotate(po,grp,[1,4])
      
  });
