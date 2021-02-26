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