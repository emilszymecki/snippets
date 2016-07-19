slang <- function(col){
	stop_pl<- c("a","aby","ach","acz","aczkolwiek","aj","albo","ale","ależ","ani","aż","bardziej","bardzo","bo","bowiem","by","byli","bynajmniej","być","był","była","było","były","będzie","będą","cali","cała","cały","ci","cię","ciebie","co","cokolwiek","coś","czasami","czasem","czemu","czy","czyli","daleko","dla","dlaczego","dlatego","do","dobrze","dokąd","dość","dużo","dwa","dwaj","dwie","dwoje","dziś","dzisiaj","gdy","gdyby","gdyż","gdzie","gdziekolwiek","gdzieś","i","ich","ile","im","inna","inne","inny","innych","iż","ja","ją","jak","jakaś","jakby","jaki","jakichś","jakie","jakiś","jakiż","jakkolwiek","jako","jakoś","je","jeden","jedna","jedno","jednak","jednakże","jego","jej","jemu","jest","jestem","jeszcze","jeśli","jeżeli","już","ją","każdy","kiedy","kilka","kimś","kto","ktokolwiek","ktoś","która","które","którego","której","który","których","którym","którzy","ku","lat","lecz","lub","ma","mają","mało","mam","mi","mimo","między","mną","mnie","mogą","moi","moim","moja","moje","może","możliwe","można","mój","mu","musi","my","na","nad","nam","nami","nas","nasi","nasz","nasza","nasze","naszego","naszych","natomiast","natychmiast","nawet","nią","nic","nich","nie","niech","niego","niej","niemu","nigdy","nim","nimi","niż","no","o","obok","od","około","on","ona","one","oni","ono","oraz","oto","owszem","pan","pana","pani","po","pod","podczas","pomimo","ponad","ponieważ","powinien","powinna","powinni","powinno","poza","prawie","przecież","przed","przede","przedtem","przez","przy","roku","również","sama","są","się","skąd","sobie","sobą","sposób","swoje","ta","tak","taka","taki","takie","także","tam","te","tego","tej","temu","ten","teraz","też","to","tobą","tobie","toteż","trzeba","tu","tutaj","twoi","twoim","twoja","twoje","twym","twój","ty","tych","tylko","tym","u","w","wam","wami","was","wasz","wasza","wasze","we","według","wiele","wielu","więc","więcej","wszyscy","wszystkich","wszystkie","wszystkim","wszystko","wtedy","wy","właśnie","z","za","zapewne","zawsze","ze","zł","znowu","znów","został","żaden","żadna","żadne","żadnych","że","żeby")
	text <- paste(col,collapse = " ")
	text_Vec <- VectorSource(text)
	corpus <- Corpus(text_Vec)
	corpus <- tm_map(corpus, content_transformer(tolower))
	corpus <- tm_map(corpus,removePunctuation)
	corpus <- tm_map(corpus,stripWhitespace)
	corpusP1 <- tm_map(corpusP1,removeWords,stop_pl)
	results <- DocumentTermMatrix(corpus)
	results <- as.matrix(results)
	results <- colSums(results)
	as.data.frame(results)
}