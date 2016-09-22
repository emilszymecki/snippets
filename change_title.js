var page = 10577;
var x = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];
var macro;
var names;
var count;

macro ="CODE:";
macro +="URL GOTO=http://indata.instytut-pollster.pl/surveys/pages/192/{{PAGE}}"+"\n";
macro +="TAG POS=1 TYPE=IMG ATTR=CLASS:question-edit"+"\n";
macro +="TAG POS=1 TYPE=TEXTAREA FORM=ID:QuestionPagesForm ATTR=ID:QuestionText CONTENT={{NAMES}}"+"\n";
macro +="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:QuestionPagesForm ATTR=*"+"\n";
macro +="WAIT SECONDS=2"+"\n";



for(var j = 0;j<= x.length;j++){
  var n = x[j];
     for(var i = 0; i<= 7; i++){
      p = i + page;
      nn = n;
        iimSet("PAGE", p)
        iimSet("NAMES", nn)
        if(i == 7){
          page = i + page;
        }

    iimPlay(macro);   
    } 
}

iimDisplay("Script completed.");
