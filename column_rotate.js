function colShuffle(po,block){

var arr = [];

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function arraymove(el) {
    var stack = arr.indexOf(el);
    var elm = arr[stack];
    arr.splice(stack, 1);
    arr.splice(el-1, 0, elm);
}


$(po).find('table tr').each(function(){
   $(this).children().each(function(a,b){
   	 if(arr.indexOf(a) == -1 && a != 0){
   	 	arr.push(a);
   	 }
     $(this).data('col',a);
   });
});

shuffle(arr);

if(block != undefined){
	block.sort();
	for(var i =0; i<block.length;i++){
		arraymove(block[i]);
	}
}


console.log(arr);
for(var i = 0; i<arr.length; i++){
	$(':data("col")').filter(function(){
 	if($(this).data('col') == arr[i]){
   		$(this).parent().append($(this));
 	}
	});
}

}
