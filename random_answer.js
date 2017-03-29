 $('.page').on("showPage",function(){
       		var pi = '.'+$(this).attr('class').split(" ")[5];
            var qArr = $(pi).find('.answer').toArray();
   			fisherYates (qArr);
   			var self = {};
	
			self.setReady = function(){
				var btn = $(pi).find('.go-page');
                return $(btn).hasClass('btn-success')?true:false;
			}
            

            
            self.getReady = function(fn1,fn2,arr){
					fn2(arr);
              		if(fn1() != true){
						return self.getReady(fn1,fn2,arr)
					}else{
						return 0;
					}
             
			}
            
            self.checkAndDelete = function(arr){
				$(arr).eq(0).click();
              	arr.shift();
			}
            
            self.createBtn = function(){
				var lowBar = $(pi).find('.list-inline');
              	$(lowBar).append('<li class="pull-right"><button type="button" class="btn btn-primary btn-sm randomFill">Wypełnij losowo</button></li>')
			}
            
            self.actionRandomBtn = function(){
              		$(pi).find('.randomFill').on('click',function(){
						self.getReady(self.setReady,self.checkAndDelete,qArr);
					})
			}
            
            
            self.typeofAnswer = function(arr){
				if( $(arr).eq(0).attr('type') == null || undefined ){
					return false;
				}else{
					return true;
				}
			}
            
            self.hotKey = function(){
				$(document).on('keypress',function(e) {
                    code = e.keyCode ? e.keyCode : e.which;
                      if(code.toString() == 13){
						$(pi).find('.go-page').click()
					  }
                  
                  	  if(code.toString() == 39){
						$(pi).find('.randomFill').click()
					  }
     
                });
			}
            
            if(qArr.length > 1 && self.typeofAnswer(qArr)){
              self.createBtn();
              self.actionRandomBtn();
              
             //self.getReady(self.setReady,self.checkAndDelete,qArr);
            }
   			self.hotKey();
           
	});
