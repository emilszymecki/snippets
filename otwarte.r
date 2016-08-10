normalizuj <- function(name,filtr){
    library(stringdist)
    xyz <- data.frame()
    
    for(i in 1:nrow(name)){
        for(j in 1:ncol(name)){
            x <- tolower(as.character(name[i,j]))
            if(x != ""){
                y <- amatch(x,filtr,maxDist=2,matchNA = FALSE,nomatch = 0)
                if(y != 0){
                    w<- filtr[y]
                }else{
                    w<- as.character(paste("Inne_",as.character(x),sep=""))
                }
                x <- w
            }else{
                x <- NA
            }
            xyz[i,j] <- x
        }
    }
    return(xyz)
}


wyniki <- function(name){
    all <- stack(name);
    return(as.data.frame(table(all$values)))
}



rameczka <- function(name,filtr){
  abc <- data.frame()
  for(i in 1:nrow(name)){
        for(j in 1:ncol(name)){
            el <-name[i,j]
            if(!is.na(el)){
                if(el %in% filtr){
                    abc[i,el]<- 1
                }else{
                    abc[i,"INNE"]<- 1
                }
            }
        }
    }
    return(abc)
}
