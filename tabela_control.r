tabela_control <- function(tabelka){
    return (tabelka %>% apply(1,table) %>% lapply(as.data.frame) %>% lapply(function(x){
        x %>% 
            spread(key = Var1, value = Freq)
    }) %>% bind_rows() %>% as.data.frame() %>% rowwise() %>% do(data.frame(., ile.pustych=sum(is.na(.))))
    )
}
