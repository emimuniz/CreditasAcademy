const AlternatingCharacters = (string) => {
    let contador = 0; 
    for (let index = 0; index < string.length; index++) {
            if(string[index] != string[index -1]){
                contador++;
            }
    }

    return string.length - contador;
}

console.log(AlternatingCharacters("AAAA"))
console.log(AlternatingCharacters("BBBBB"))
console.log(AlternatingCharacters("ABABABAB"))
console.log(AlternatingCharacters("BABABA"))
console.log(AlternatingCharacters("AAABBB"))