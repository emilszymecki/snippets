czyszczenie <- function(name){
  nowa <- data.frame()
  nowa <- as.data.frame(apply(name,2,function(x)gsub('\\s+', '',x)))
  nowa <- mutate_each(nowa, funs(tolower))
  nowa[nowa == ""] <- NA
  return(nowa)
}

lista <- function(name,jak){
  lista <- data.frame()
  lista <- unlist(name, use.names = FALSE)
  lista <- as.data.frame(table(lista));
  write.csv2(lista,paste(toString(jak),".csv"))
  return(lista)
}

normalizacja <- function(name,korekta){
    normalizacja <- data.frame()
    normalizacja <- name %>% mutate_each(funs(korekta$poprawnie[match(.,korekta$lista)]))
    return(normalizacja)
}

spss <- function(name,filtr){
  abc <- data.frame()
  for(i in 1:nrow(name)){
        for(j in 1:ncol(name)){
            el <-as.character(name[i,j])
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
