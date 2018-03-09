function powerset(array) {

    function fork(i, t) {
        if (i === array.length) {
            result.push(t);
            return;
        }
        fork(i + 1, t.concat([array[i]]));
        fork(i + 1, t);
    }

    var result = [];
    fork(0, []);
    return result;
}

    var pickupProduct = function(el){
        return Object.keys(el).map(function(a,b){
            return a
        })
    }

    var aggregate = function(el,obj){
        return  el.map(function(a){
            var arr = a
            var name = a.join("_")
            var arrVal = arr.map(function(a,b){
                return (obj[a].val)
            })
            var arrValSum = arrVal.reduce(function(acc,el){
                return acc + el
            },0)
            return [name,arrValSum]
        })
    }

//POST 
Survey.bind('END','page','relevance',function(s){
		var id = s.get.res_id 
		var odp = $('.open-limit').map(function(a,b){
            var num = parseInt($(this).val())
            return num
        })

		$.ajax( { url: "https://api.mlab.com/api/1/databases/plstr_play/collections/plstr?apiKey=DYtzKWuSiGbx9sgHhC_9ImL9SR-O7X1m",
          data: JSON.stringify( 
        { 
        id : id,
        produkty:{
            produkt1:{val:odp[0]},
            produkt2:{val:odp[1]},
            produkt3:{val:odp[2]},
            produkt4:{val:odp[3]}
            }
        }
    ),
          type: "POST",
          contentType: "application/json" } );

	});
  
  //GET
Survey.bind('TEST1','page','relevance',function(s){
  
	var id = s.get.res_id
	var url = 'https://api.mlab.com/api/1/databases/plstr_play/collections/plstr?apiKey=DYtzKWuSiGbx9sgHhC_9ImL9SR-O7X1m&q={"id":"'+id+'"}' 
	
    $.ajax({
        url : url,
        dataType : 'json',
        type : 'get'
    })
    .done(function(res) {
       var el = res[0].produkty
       var fn1 =  pickupProduct(el)
       var cmb2 = powerset(fn1)
       var agg = aggregate(cmb2,el)
   		 console.log(agg)
    })
	
});
