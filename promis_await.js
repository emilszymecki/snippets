/// tadam PROMIS jest tylko wraperem na funkcje wewnątrz określającą że czekamy na rozwiązanie !!!! 

var delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => resolve(ms), ms)
})

var test = async (slogan) => {
    var dupa = await delay(2500)
    var kupa = dupa
    console.log(slogan, kupa)
} 

[1, 2, 3, 4, 5].map(async (x) => {
    var dupa = await delay(1000 * x)
    console.log(dupa)
}) /// wywołania po kolei ale jak zrobimy await delay(1000) to się rozwiąże po sekundzie 

var nums = [2, 4, 6, 8]

for (num of nums) {
    var dupa = await delay(5000)
    console.log("Pausa sek", dupa)
} ///<- wywołanie co 5 sek
