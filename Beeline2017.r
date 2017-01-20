Beeline$Kat <- cut(Beeline$Marka1, 
                       breaks = c(-Inf, 6, 11, 16, 20, 23, 27, 32 ,Inf), 
                       labels = c("Garnki", "Patelnie", "Zestawy", "Szklo", "Sztucce", "Noze","Naczynia" ,"Patelnie0"), 
                       right = FALSE)
                       
        
