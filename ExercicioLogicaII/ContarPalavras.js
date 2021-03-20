const contarPalavras = (string) => {
    string = string.toLowerCase().normalize('NFD').replace(/([\u0300-\u036f]|[^a-zA-Z ])/g, '').split(' ')
    let obj = {}
    string.map((palavra) => {
        if(obj.hasOwnProperty(palavra)){
            obj[palavra] =   obj[palavra] + 1

        }else{
            obj[palavra] = 1
        }
    })

    return obj
}

console.log(contarPalavras('Doo bee doo bee doo'))  
