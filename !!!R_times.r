library(jsonlite)
emptyData <- data.frame()
for(i in 1:length(dataset$END_1)){
    el<-dataset$END_1[i]
    json <- as.data.frame(fromJSON(el, simplifyVector = FALSE))
    if(i == 1){
        emptyData <- json
    }else{
        emptyData <- rbind(emptyData,json)
    }
}
emptyData <- cbind(dataset$id,emptyData)
