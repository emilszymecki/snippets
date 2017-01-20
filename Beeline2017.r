> label <- c("garnki","patelnie","zestawy",
+            "szklo","sztucce","noze","naczynia")
> Beeline$Kat <- cut(Beeline$Marka1, breaks = c(0,1,6,11,16,20,23,27),labels = label) # Tworzę nową kolumnę z kategoriami względem N'ek z kol Marki1
                       
        
x <- Beeline[0,956:1033] # Wyciągam nazwy kolumn

y<- data.frame()
for(i in 1:length(label)){
    name <- label[i]
    for(j in 1:length(x)){
        nazwa_col <- paste(name,x[j],sep="_")
        y[1,nazwa_col] <- NA
    }
}  #Tworzę nowego data.frame() do obsadzania danych 
