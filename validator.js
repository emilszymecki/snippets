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
    
    $(po).find('.clickTd, .answer').on('click',function(){
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


var countClickTable = function(){
	return Object.keys(valid_arr).map(function(a,b){
		var name = a
		console.log(name)
        var answer = valid_arr[a]
        return Object.keys(answer).map(function(a,b){
                return answer[a]
         }).reduce(function(acc,a){
            var spl = a.label.split("-")
            if(spl.length >2){
				if(acc.label == undefined){
					acc.label = name
				}
                if(acc["col_"+spl[2]] == undefined){
                     acc["col_"+spl[2]] = 0
                     if(a.checked == true){
                        acc["col_"+spl[2]] += 1
                        return acc
                     }else{
                        return acc
                     }
                }else{
                    if(a.checked == true){
                        acc["col_"+spl[2]] += 1
                        return acc
                     }
                    return acc
                }
            }else{
                return "To nie jest matryca"
            }
         },{})
    })
}

var timeStartEnd = function(fn){
	return countTime(fn).map(function(a,b){
        var question = a
        var name = question[question.length-1].label.split('-')[0]
        var end_time = question[question.length-1].start
        return {label:name,start_end_time:end_time}
    })
}

var averageTime = function(fn){
	return countTime(fn).map(function(a,b){
        var question = a,
        name = question[question.length-1].label.split('-')[0],
        acc = []
        question.map(function(a,b){
            if(b>0){
                acc.push(a.beetwen)
            }
        })
        var avg = Math.round(acc.reduce(function(sum, a) { return sum + a },0)/(acc.length||1))
        return {label:name, avg_time:avg} 
    });
}

var sequenceAnswer = function(fn){
	return countTime(fn).map(function(a,b){
        var question = a,
        name = question[question.length-1].label.split('-')[0],
        acc = []
        question.map(function(a,b){           
                acc.push(a.label)
        })
        return {label:name, sequence:acc} 
    });
}

var validColCheck = function(){
	return countClickTable().map(function(a,b){
	var question = a,
	label = a.label
	temp = []
	Object.keys(question).map(function(a,b){
		if(a != 'label' && question[a] > 0){
			temp.push(a)
		}
	})
	if(temp.length > 1){
		return;
	}else{
		return [label,temp[0]]
	}
	})
}
