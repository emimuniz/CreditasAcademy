const anagramas = (words) => {
    let arrayRetorno = []
    let arrayAux = [...words]
    let aux = []    


    for (let i = 0; i < arrayAux.length; i++) {

        let separateLettersExternal = arrayAux[i].toLowerCase().split('')
        let separateLettersExternalLength = separateLettersExternal.length
       
        for (const valueInterna of words) {
 
         let separateLettersInternal = valueInterna.toLowerCase().split('');
         let separateLettersInternalLength = separateLettersInternal.length;
 
            if(separateLettersInternalLength == separateLettersExternalLength){
                if(separateLettersExternal.filter((letter) => separateLettersInternal.includes(letter)).length == separateLettersExternalLength){
                     aux.push(valueInterna)
                     let index = arrayAux.indexOf(valueInterna)
                     arrayAux.splice(index, 1)
                }
             }
        }
        arrayRetorno.push(aux)
        aux = []
        i = i - 1;
    }

    return arrayRetorno

}


console.log(anagramas(['CaRs', 'racs', 'scar', 'foR', 'poTatos', 'creams', 'scream']))
console.log(anagramas(['CaRs',  'scar', 'foR', 'poTatos', 'four', 'creams', 'scream', 'racs']))
console.log(anagramas(['CaRs',  'scar', 'foR', 'poTatos']))

//Tentativo com FOREACH (TODO)
// arrayAux.forEach((elementExterno, i) => {
//     let separateLettersExternal = elementExterno.toLowerCase().split('')
//     let separateLettersExternalLength = separateLettersExternal.length
//     words.forEach((elementInterno) => {
//         let separateLettersInternal = elementInterno.toLowerCase().split('');
//         let separateLettersInternalLength = separateLettersInternal.length;

//             if(separateLettersInternalLength == separateLettersExternalLength){
//                 if(separateLettersExternal.filter((letter) => separateLettersInternal.includes(letter)).length == separateLettersExternalLength){
//                     aux.push(elementInterno)
//                     let index = arrayAux.indexOf(elementInterno)
//                     arrayAux.splice(index, 1)
//                 }
//             }
//     })

//     arrayRetorno.push(aux)
//     aux = []
//     i = i - 1;
// })



//Tentativas
//    for (const valueExterna of arrayAux) {

//        console.log(words)
//        let separateLettersExternal = valueExterna.toLowerCase().split('')
//        let separateLettersExternalLength = separateLettersExternal.length
//        console.log(valueExterna)
      
//        for (const valueInterna of words) {

//         let separateLettersInternal = valueInterna.toLowerCase().split('');
//         let separateLettersInternalLength = separateLettersInternal.length;

//         console.log(separateLettersExternal.filter((letter) => separateLettersInternal.includes(letter)).length == separateLettersExternalLength)
//             if(separateLettersInternalLength == separateLettersExternalLength){
//                 if(separateLettersExternal.filter((letter) => separateLettersInternal.includes(letter)).length == separateLettersExternalLength){
//                     aux.push(valueInterna)
//                     console.log(valueInterna)
//                     console.log(aux)
//                     let index = arrayAux.indexOf(valueInterna)
//                     console.log(valueExterna, index, arrayAux)
//                     // words.splice(index, 1)
//                     console.log(arrayAux.splice(index, 1))
//                 }
//             }
//        }
//        console.log(aux)
//        arrayRetorno.push(aux)
//        aux = []

//    }



// words.map((word, i) => {
//      wordAnt = words[contador].toLowerCase().split('')      
//      wordAntLenght = words[contador].toLowerCase().split('').length
//      wordDividindo = word.toLowerCase().split('');   
        
    
//     if(wordAnt.filter((word) => wordDividindo.includes(word)).length == wordAntLenght){
//         aux.push(word);
//         console.log(contador)
//         console.log(word)

//     }else{
//         arrayRetorno.push(aux);
//         aux = [];   
//         contador = i;
//         aux.push(word);
//         console.log(aux)
//     }
// })



