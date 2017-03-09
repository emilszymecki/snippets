var macro;
var survey;
var page;

var arr = ["P3","P5","P8","P11"];


macro ="CODE:";
macro +="TAG POS=1 TYPE=A ATTR=TXT:{{PAGE}}"+"\n";
macro +="TAG POS=1 TYPE=IMG ATTR=CLASS:question-edit"+"\n";
macro +="TAG POS=1 TYPE=SELECT FORM=ID:QuestionPagesForm ATTR=ID:QuestionType CONTENT=%2"+"\n";
macro +="TAG POS=1 TYPE=BUTTON FORM=ID:QuestionPagesForm ATTR=TXT:Ustaw<SP>rotację"+"\n";
macro +="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:QuestionPagesForm ATTR=*"+"\n";
macro +="WAIT SECONDS=2"+"\n";

for(var i = 0; i<arr.length; i++){

	page = arr[i];
	
    iimSet("PAGE", page);


iimPlay(macro);
	
}


iimDisplay("Script completed.");
