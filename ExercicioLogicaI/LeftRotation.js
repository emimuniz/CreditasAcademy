const LeftRotation = (a, b) => {
    let array = a;
    for (let index = 0; index < b; index++) {
        array.push(array.shift());
    }
    return array
}



console.log(LeftRotation2([1, 2, 3, 4, 5], 3))