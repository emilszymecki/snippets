"use strict";

var page = require('webpage').create();

function open(){
			
			page.open('http://www.se.pl/', function(status) {
		  console.log("Status: " + status);
		  if(status === "success") {

		  	var t = page.evaluate(function() {
		    		return dtx_data().mt_ec;
		  	});

		    var cookies = phantom.cookies;
		    /*for(var i in cookies) {
		    	console.log(i + "  "+ cookies[i].name + '  =  ' + cookies[i].value);
		  }*/

		  var valid = cookies.map(function(a,b){
		  	return a.value
		  }).filter(function(a,b){
		  	 return a == t
		  });
		  	
		  	console.log(t,"  ",valid.length > 0?valid:"pusto","  ", valid == t);
		  	//console.log(t)
		  }
		  
		  page.clearCookies();
		 	//checkFinish();
		  	phantom.exit();
		  	
		});
}

open()


 
