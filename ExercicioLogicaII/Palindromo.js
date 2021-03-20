const palindromo = (string) => {
    string = string.toLowerCase().normalize('NFD').replace(/([\u0300-\u036f]|[^a-zA-Z])/g, '')
    let stringValidacao = string.split('');
    let contador = 0;
    for (let index = string.length -1; index >= 0; index--) {
        if(stringValidacao[contador] != string.charAt(index)){
            return false
        }
        contador++;
    }

    return true
}

console.log(palindromo('aná'))
console.log(palindromo('maam'))
console.log(palindromo('abracadabra'))
console.log(palindromo("Madam, I'm Adam"))


