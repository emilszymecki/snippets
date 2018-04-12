SZYBKI_TEST <- c(
"A1"
,"A2a"
,"A2b.1"
,"A2b.1.text"
,"A2b.2"
,"A2b.2.text"
,"A2d.1"
,"A2d.1.text"
,"A2e.1"
,"A2e.1.text"
,"A2e.2"
,"A2e.2.text"
,"A2f.1"
,"A2f.1.text"
,"A2f.2"
,"A2f.2.text"
)
MODUL_1 <- c(
"A5c_1"
,"A4c.1"
,"A4c.1.text"
,"A4b.1"
,"A4b.1.text"
,"A4b.2"
,"A4b.2.text"
,"A5a_1"
,"A4e.1"
,"A4e.1.text"
,"A4e.2"
,"A4e.2.text"
,"A5h_1"
,"A4f.1"
,"A4f.1.text"
,"A4f.2"
,"A4f.2.text"
,"A5b_1"
,"A5d_1"
,"A5e_1"
,"A5f_1"
,"A5g_1"
)
MODUL_2 <- c(
"A5c_2"
,"A5a_2"
,"A5b_2"
,"A5h_2"
,"A5d_2"
,"A5e_2"
,"A5f_2"
,"A5g_2"
)
MODUL_3 <- c(
"A5c_3"
,"A5a_3"
,"A5b_3"
,"A5h_3"
,"A5d_3"
,"A5e_3"
,"A5f_3"
,"A5g_3"
)

CZYT <- c(
'A1_B1_B2_B3',
'A1_B1_B3_B2',
'A2_B2_B1_B3',
'A2_B2_B3_B1',
'A3_B3_B1_B2',
'A3_B3_B2_B1',
'B1_A1_A2_A3',
'B1_A1_A3_A2',
'B2_A2_A1_A3',
'B2_A2_A3_A1',
'B3_A3_A1_A2',
'B3_A3_A2_A1'  
)

setDATA <- data.frame()
for (i in 1:nrow(dataset)){
    splitVal <- unlist(strsplit(CZYT[dataset$PRE_ROT[i]], "_", fixed = FALSE))
    newSZYBKI_TEST <- paste(SZYBKI_TEST, splitVal[1], sep="_")
    newMODUL_1 <- paste(MODUL_1, splitVal[2], sep="_")
    newMODUL_2 <- paste(MODUL_2, splitVal[3], sep="_")
    newMODUL_3 <- paste(MODUL_3, splitVal[4], sep="_")
    newCONCAT <- c(newSZYBKI_TEST,newMODUL_1,newMODUL_2,newMODUL_3)
    oldCONCAT <- c(SZYBKI_TEST,MODUL_1,MODUL_2,MODUL_3)
    
    values <- unname(unlist(dataset[i,oldCONCAT]))
    
    setDATA[i,"id"] <- dataset$id[i]
    setDATA[i,"rot"] <- dataset$ROT[i]
    setDATA[i,"decodeROT"] <- CZYT[dataset$PRE_ROT[i]]
        
    for(j in 1:length(newCONCAT)){
        setNAME <- newCONCAT[j]
        setVAL <- values[j]
        setDATA[i,setNAME] <- setVAL
    }
}
