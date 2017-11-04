function(name,new){
    abc <- data.frame()
    for(i in 1:nrow(name)){
        for(j in 1:ncol(name)){
            el <-as.character(name[i,j])
            let  <- (new[i,j])
            if(!is.na(el)){
                abc[i,el] <- let
            }
        }
    }
    return(abc)
}
