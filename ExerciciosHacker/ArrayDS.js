const ArrayDS = (array) => {
    let hourglasses = []
    for (let x = 0; x < 4; x++) {
        for (let y = 0; y < 4; y++) {
            let line = array[x][y] + array[x][y+1] + array[x][y+2] + array[x+1][y+1] + array[x+2][y] + array[x+2][y+1] + array[x+2][y+2];
            hourglasses.push(line);
        }
    }
    let max = hourglasses.reduce(function(a, b) {
        return Math.max(a, b);
    });
    return max
}

let teste = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
]

console.log(ArrayDS(teste))