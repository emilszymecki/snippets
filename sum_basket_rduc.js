var arr = [
  {
    "PG8": 9
  },
  {
    "PG8": "2-5-7-4-8-11-6-1-10-3-9"
  },
  {
    "PG8": "2-4"
  },
  {
    "PG8": "2-10-11"
  },
  {
    "PG8": "2-7"
  },
  {
    "PG8": "8-6-1-11"
  },
  {
    "PG8": "6-8-4-9"
  }
]

var z = arr.map(function(a,b){ return a.PG8.toString()}).map(function(a,b){
	return a.split("-");
}).reduce(function(acc,el){
	 el.map(function(x,i,arr){
	 	let indexer = arr.indexOf(x);
	 	if(!acc[indexer]){
	 		acc[indexer] = [x];
	 	}else{
	 		acc[indexer].push(x)
	 	}
	 })
	 return acc
},[]).map(function(a,b){
	return a.reduce(function(x,y){
		if(!x[y]){
			x[y] = 1
		}else{
			x[y] += 1
		}
		return x
	},{});
}).reduce(function(a,b,c){
    a[c+1] = b
	return a
},{})
console.log(z)
