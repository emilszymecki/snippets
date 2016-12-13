function group_rotate(po,q,block){

	function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
	}

	var arr_grp = {};
    var obj_stack = [];
  	var parent;

    $(po).find('.question-row').each(function(a,b){
        var id = $(this).getValueN();
        var question_group = q[id];
        $(this).data({"id":id,"group":question_group});
        if(arr_grp[question_group] == undefined){
           arr_grp[question_group] = [$(this)];
        }else{
            arr_grp[question_group].push($(this));
		}
        parent = $(this).parent()
        $(this).remove();
    });

     for(var o in arr_grp){
		if(o != "end"){
			obj_stack.push(o);
		}
      }

      fisherYates(obj_stack);
      obj_stack.push("end");

      for(var i = 0; i < obj_stack.length; i++){
      	var group_array_single = arr_grp[obj_stack[i]];
            group_array_single.map(function(x,y){
                if(block.indexOf(parseInt(x.getValueN())) != -1){
                arraymove(group_array_single, y , 0);
                }
            });
			group_array_single.map(function(a,b){
            	$(parent).append(a);
            });
        if($(po).find('.question-row').parent().hasClass('row')){
        	$(po).find('.question-row').last().after('<div class="col-md-12"></div>');
        }
      }

} 
