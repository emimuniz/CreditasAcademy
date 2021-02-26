const BubbleSort = (a) => {
    let contador = 0;
    let flag;
    do{
        flag = false;
        for (let index = 0; index < a.length; index++) {
            if(a[index] > a[index + 1]){
                contador++
                let aux = a[index];
                a[index] = a[index+1]
                a[index+1] = aux
                flag = true
            }

        }
     }while(flag) 
     
    console.log(`Array is sorted in ${contador} swaps.`);
    console.log(`First Element: ${a[0]}`) 
    console.log(`Last Element: ${a[a.length - 1]}`)    
}

console.log(BubbleSort([3, 2, 1]))
console.log(BubbleSort([3, 2, 1]))