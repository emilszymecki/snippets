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
