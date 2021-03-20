let buttons = document.querySelectorAll('button');
let painel = document.querySelector('.painel')
let numbers = '',  calc = [], lastOperator = '', lastNumber

function calculo(operador){
    let total = calc.reduce((total, number) => {
        if(operador == '+') return parseFloat(total) + parseFloat(number);
        if(operador == '-') return parseFloat(total) - parseFloat(number);
        if(operador == '*') return parseFloat(total) * parseFloat(number);
        if(operador == '/') return parseFloat(total) / parseFloat(number);
    });
    if(calc.length >= 2){
        calc.splice(0,2)
        calc.unshift(total)
    }
    painel.innerHTML = total;  
}

function handleButton(event){
    let buttonText = event.currentTarget.innerText;
    if(['-', '+', '*', '/', '='].includes(buttonText)){
        if(numbers) {
            calc.push(numbers)
            lastNumber = numbers;
        }
        
        if(buttonText != '=') {
            numbers = '';
            lastOperator = buttonText;
            lastNumber = calc[0];
        } else {
            if(!calc[1]) {
                if(!lastNumber) {
                    calc.push(calc[0])
                } else {
                    calc.push(lastNumber)
                }
            }
        }
        if(lastOperator != '' && calc[1]){
            calculo(lastOperator)
            numbers = '';
        }
    }   
    else if(buttonText == 'CE'){
        numbers = '';
        lastOperator = '';
        painel.innerHTML = '';
        calc = []
    }
    else{
        if(numbers.includes('.')  && buttonText == '.' || numbers == '' && buttonText == '.' ){
            return
        }
        numbers+= buttonText;
        painel.innerHTML = numbers;
    }
}

buttons.forEach((item) => {
    item.addEventListener('click', handleButton)
})