for(b in 1:nrow(AGITO2)){
    label <- c(AGITO2[b,"U1"],AGITO2[b,"U2"],AGITO2[b,"U3"],AGITO2[b,"U4"],AGITO2[b,"U5"])
    for(a in 1:34){
        z <- which(label == a)
        for(i in 1:length(Colnazwy)){
            nazwa <- gsub("w",a,Colnazwy[i])
            if(!is.integer0(z)){nazwa2 <- gsub("w",z,Colnazwy[i])}
            if(a %in% label){
                cat(nazwa,nazwa2,"\n")
                y[b,nazwa] <- AGITO2[b,nazwa2]
            }else{
                y[b,nazwa] <- NA
            }
        }  
    }
    
}

function(x)
{
    is.integer(x) && length(x) == 0L
}

Colnazwy <- c('Q4_w'
,'Q4_w.888.text'
,'Q5_w.1'
,'Q5_w.2'
,'Q5_w.3'
,'Q5_w.4'
,'Q5_w.5'
,'Q5_w.99'
,'Q6_w.1'
,'Q6_w.2'
,'Q6_w.3'
,'Q6_w.4'
,'Q6_w.5'
,'Q6_w.6'
,'Q6_w.7'
,'Q6_w.8'
,'Q6_w.9'
,'Q6_w.10'
,'Q6_w.11'
,'Q6_w.12'
,'Q6_w.13'
,'Q6_w.14'
,'Q6_w.15'
,'Q6_w.16'
,'Q6_w.17'
,'Q6_w.18'
,'Q6_w.19'
,'Q6_w.20'
,'Q6_w.888'
,'Q6_w.888.text'
,'Q7_w.1'
,'Q7_w.2'
,'Q7_w.3'
,'Q7_w.4'
,'Q7_w.888'
,'Q7_w.888.text'
,'Q8_w.200'
,'Q8_w.201'
,'Q8_w.202'
,'Q8_w.203'
,'Q8_w.204'
,'Q8_w.205'
,'Q8_w.206'
,'Q8_w.207'
,'Q8_w.208'
,'Q8_w.209'
,'Q8_w.210'
,'Q8_w.211'
,'Q8_w.212'
,'Q8_w.213'
,'Q8_w.214'
,'Q8_w.215'
,'Q8_w.999'
,'Q8_w.999.text'
,'Q9_w.200'
,'Q9_w.201'
,'Q9_w.202'
,'Q9_w.203'
,'Q9_w.204'
,'Q9_w.205'
,'Q9_w.206'
,'Q9_w.207'
,'Q9_w.208'
,'Q9_w.209'
,'Q9_w.210'
,'Q9_w.211'
,'Q9_w.212'
,'Q9_w.213'
,'Q9_w.214'
,'Q9_w.215'
,'Q9_w.999'
,'Q9_w.999.text')


// poprawka do poprawki 
