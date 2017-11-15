var valid_arr = {}  
  
var validator = function(po){
    var correctly = function(that,a){
            if($(that).data('checked') != temp[a].checked){
               temp[a] = Object.assign({}, $(that).data());
            }
    }  

    var initialize =  function(po){
        var temp = {}
        $(po).find('.answer').each(function(a,b){
            $(this).data({'click_time':0,'checked':null,'label':$(this).siblings('.label').text()})
            temp[a] = Object.assign({}, $(this).data());
        })
		
        valid_arr[po.toString()] = Object.assign({}, temp);
      
        return temp;
    }

    var temp = initialize(po) 
    
    $(po).find('.clickTd, .answer').one('click',function(){
        $(po).find('.answer').each(function(a,b){
            if($(this).is(':checked')){
                $(this).data('checked',true)
                $(this).data('click_time',$.now())
                correctly(this,a)
            }
            if($(this).is(':not(:checked)') && $(this).data('checked') != null){
                $(this).data('checked',false)
                $(this).data('click_time',$.now())
                correctly(this,a)
            }
        })
		valid_arr[po.toString()] = Object.assign({}, temp);
		console.log(valid_arr)
    })
    console.log(temp)
	/*
    $(po).find('.go-page').on('click',function(){
		valid_arr[po.toString()] = Object.assign({}, temp);
	})
	*/
}

var noNull = function(){
   return Object.keys(valid_arr).map(function(a,b){
        var answer = valid_arr[a]
        return Object.keys(answer).map(function(a,b){
            return answer[a]
        }).filter(function(a,b){
            return a.checked != null
            })
    })
}

var noNullandFalse = function(){
   return Object.keys(valid_arr).map(function(a,b){
        var answer = valid_arr[a]
        return Object.keys(answer).map(function(a,b){
            return answer[a]
        }).filter(function(a,b){
            return a.checked != null && a.checked != false
            })
    })
}

var countTime = function(fn){
	return fn().map(function(a,b){
		var question = a,
		time = []
		question.map(function(a,b){
			time.push([a.label,a.click_time,a.checked])
		})
		var sort_time = time.sort(function(a, b) {
	    return a[1] - b[1];
		});

		return sort_time.map(function(a,b){
			var el = {}
			el.label = sort_time[b][0]
			el.timestamp = sort_time[b][1]
			el.checked = sort_time[b][2]
			if(b>0){
	            el.beetwen = (sort_time[b][1] - sort_time[(b-1)][1])
	            el.start = (sort_time[b][1] - sort_time[0][1])
	        }else{
	            el.beetwen = "start"
	            el.start = "start"
			}
			return el
		})
	})
}
