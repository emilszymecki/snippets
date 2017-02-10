banki <-function(x,y,z){
x$marge <- x$email_result
y$marge <- y$session_unique
z$marge <- z$session_unique
test <-Reduce(function(a, b) merge(a,b, by = "marge", all = TRUE), list(x, y, z))
wynik <- as.data.frame(test)
return (wynik)
}

bank <- banki(control,exposed,total)
