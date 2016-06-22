var hash = {
	"M2":["M1-1","M1-2","M1-3","M1-4"],
	"M3":["M2-2","M2-2"],
	"M4":["M3-1"]
}

for(x in hash){
	var name = x;
	var condition = hash[x];
	var tmp = "";
	condition.forEach( function(element, index) {
		tmp += `(s.data['${element}'] != true)`;
		if(condition.length > 1 && index != condition.length - 1){
			tmp += "||";
		}
	});


	console.log(
`Survey.bind('${name}','page','relevance',function(s){ 
	if(${tmp}){
		return false;
	}
});`
	);
}
