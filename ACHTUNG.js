var obj = {
'1': '1',
'2': '1',
'3': '1',
'4': '1',
'5': '1',
'6': '1',
'7': '2',
'8': '2',
'9': '2',
'10': '3',
'11': '3',
'12': '3',
'13': '3',
'14': '3',
'15': '3',
'16': '4',
'17': '4',
'18': '4',
'19': '4',
'20': '4',
'21': '4',
'22': '4',
'23': '4',
'24': '4',
'25': '5',
'26': '5',
'27': '5',
'28': '5',
'29': '5',
'30': '5',
'31': '5',
'32': '5',
'33': '5',
'34': '5',
'35': '5',
'36': '6',
'37':'6'
};

function make(arr){

	self = {},

	self.makeArr = function(arr){
		var obj_temp = [];
		var agr = [];
		for(var i in arr){
			obj_temp.push(i);
		}
		for(var j = 1; j<= 6; j++){
			var filtered = obj_temp.filter(function(a,b){
				return obj[a] == j;
			});
			agr.push(filtered);
		}
		return agr;
	};

	self.init = function(arr){
		return self.makeArr(arr);
	};

	return self.init(arr);


    

}
console.log(make(obj));
