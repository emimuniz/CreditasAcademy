const HashTables2 = (a, b) => {
        a = a.split(' ')
        for (const value of b) {
            if(!a.includes(value)){
                return console.log('No')
            }
            else{
               const index = a.indexOf(value)
               a.splice(index, 1);
            }
            
        }

        return console.log('Yes')
}
    
console.log(HashTables2('h ghq g xxy wdnr anjst xxy wdnr h h anjst wdnr', 'h ghq'))


const HashTables = (a, b) => {
    b = b.split(' ')
    console.log(b)
    console.log(b.filter((word) => a.includes((word))), b.length)
    if(b.filter((word) => a.includes((word))).length == b.length){
        return 'Yes'
    }
    return 'No'

}


// console.log(HashTables('give me one grand today night', 'give one grand today'))
console.log(HashTables('two times three is not four', 'two times two is four'))


///falsoPositivo
const HashTables = (a, b) => {
    a = a.split(' ')
    b = b.split(' ')
    let flag;
    console.log(a, b)
    for (let i = 0; i < b.length; i++) {
        flag = false;
        for (let j = 0; j < a.length; j++) {
            console.log(b[i])
            if(a[j] == b[i]) {
                a.splice(j, 1)
                flag = true;
                continue;
            }
             
             console.log(a)
             console.log(flag)   
        } 

        if(!flag){
            console.log(flag)   
            return 'No'
        }

        // console.log(a)
    }
    return 'Yes'
}

console.log(HashTables('give me one grand today night', 'give one grand today'))
// console.log(HashTables('two times three is not four', 'two times two is four'))