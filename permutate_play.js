const powerset = (array) => { // O(2^n)
	const results = [[]];
	for (const value of array) {
		const copy = [...results]; // See note below.
		for (const prefix of copy) {
			results.push(prefix.concat(value));
		}
	}
	return results;
};

const objSet = {
	"a":{name: "a", val:1},
	"b":{name: "b", val:2},
	"c":{name: "c", val:3},
	"d":{name: "d", val:4},
	"e":{name: "e", val:5},
	"f":{name: "f", val:6},
	"g":{name: "g", val:7},
	"h":{name: "h", val:8},
	"i":{name: "i", val:9},
	"j":{name: "j", val:10},
	"k":{name: "k", val:11},
	"l":{name: "l", val:12},
	"m":{name: "m", val:13},
	"n":{name: "n", val:14},
	"o":{name: "o", val:15},
	"p":{name: "p", val:16}
}

let fn1 =  Object.keys(objSet).map(function(a,b){
	return a
})

let cmb2 = powerset(fn1)


var aggregate = cmb2.map(function(a){
	var arr = a
	var name = a.join("_")
	var arrVal = arr.map(function(a,b){
		return (objSet[a].val)
	})
	var arrValSum = arrVal.reduce(function(acc,el){
		return acc + el
	},0)
	return [name,arrValSum]
})

var flt_aggregate = aggregate.filter(function(a,b){
	return a[1] == 20
})

console.log(flt_aggregate)
