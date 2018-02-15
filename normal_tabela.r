normal_table <- function(kolumna){
    tabelka <- data.frame()
    for(i in 1:length(kolumna)){
            selected <- unlist(strsplit(as.character(kolumna[i]), ','))
            for(j in 1:length(selected)){
                    splited <- selected[j]
                    splited_vec <- unlist(strsplit(as.character(splited),'_'))
                    key <- splited_vec[1]
                    val <- splited_vec[2]
                    tabelka[i,key] <- val
                }
    }
    return(tabelka)
}
/*
Survey.bind('TXT','page','relevance',function(s,pi,po){ 

var tmp = $('.page-name-A3').find('.answer').toArray().map(function(a){
    var row = $(a).parents('tr').getValueN(),
   		col = $(a).parents('td').attr('class').match(/\bcol-\S+/g)[0].split('-')[1],
		val = $(a).is(':checked') ? 1:0,
		vis = $(a).is(':visible') ? val:NaN,
		label = ['A3'+"-"+row+"-"+col]
		return [label+"_"+vis]

}).toString()

console.log(tmp)

$(po).find('textarea').val(tmp).trigger('change')

});
*/
