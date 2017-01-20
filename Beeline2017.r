label <- c("garnki","patelnie","zestawy","szklo","sztucce","noze","naczynia")
Beeline$Kat <- cut(Beeline$Marka1, breaks = c(0,1,6,11,16,20,23,27),labels = label) # Tworzę nową kolumnę z kategoriami względem N'ek z kol Marki1
                       
        
x <- colnames(Beeline[0,956:1033]) # Wyciągam nazwy kolumn

y<- data.frame()
for(i in 1:length(label)){
    name <- label[i]
    for(j in 1:length(x)){
        nazwa_col <- paste(name,x[j],sep="_")
        y[1,nazwa_col] <- NA
    }
}  #Tworzę nowego data.frame() do obsadzania danych 


for(i in 1:nrow(Beeline)){  #Pętla po wierszach
      rcat <- as.character(Beeline$Kat[i]) #zapisuje jako tekst wartość kategorii z Beeline$Kat
    for(j in 1:length(x)){ # pętla po wszystkich nazwach kolumn
        cname <- x[j] # wyciągam nazwę kolumny jako string z x'a
        cval <- as.character(Beeline[i,cname]) # wartość jako charakter z konkretnego wiersza i kolumny
        new_col_name <- paste(rcat,cname,sep="_"); # tworzę nazwę kolumny pasującej do ramki y typu garnki_II_...
        y[i,new_col_name] <- cval #Do konkretnego wiersza i kolumny wpisuje wartość
    }
}
