emptyData <- data.frame()
for(i in 1:length(Zeszyt1$TABLE_EXT.1.text)){
    el<-Zeszyt1$TABLE_EXT.1.text[i]
    json <- as.data.frame(fromJSON(el, simplifyVector = FALSE))
    for(j in 1:ncol(json)){
        namesCol <- colnames(json)[j]
        val <- as.character(json[1,j])
        emptyData[i,namesCol] <- val
    }
}

sortDATA <- emptyData[,match(KOLEJNOSC, names(emptyData))]

emptyData <- cbind(dataset$id,sortDATA)
