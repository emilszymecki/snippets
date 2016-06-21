/**
 * Budowanie listy z idikami
var hash = {};

$(".ui-droppable").find("a").each(function(a,x){
hash[(($(this).text().split(" "))[0])] = ($(this).attr('href').split("/"))[4]
});

 */

var macro;
var survey;
var id;

var arr = ["7512","7513","7514","7515","7516","7517","7518","7519","7520","7521","7522"];


macro ="CODE:";
macro +="URL GOTO=indata.instytut-pollster.pl/surveys/pages/{{SURVEY}}}/{{ID}}"+"\n";
macro +="TAG POS=1 TYPE=IMG ATTR=CLASS:question-edit"+"\n";
macro +="TAG POS=1 TYPE=SELECT FORM=ID:QuestionPagesForm ATTR=ID:QuestionType CONTENT=%2"+"\n"
macro +="TAG POS=1 TYPE=BUTTON FORM=ID:QuestionPagesForm ATTR=TXT:Ustaw<SP>rotację"+"\n";
macro +="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:QuestionPagesForm ATTR=*"+"\n";
macro +="WAIT SECONDS=2"+"\n";

for(var i = 0; i<arr.length; i++){
	survey = 126;
	id = x[i];
	
    iimSet("SURVEY", survey);
    iimSet("ID", id);


iimPlay(macro);
	
}


iimDisplay("Script completed.");
