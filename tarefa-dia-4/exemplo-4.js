let variavel = 1
let intervalo = 10

//Não repassou a segunda opção. Mas, encontrei a solução assim. Por exemplo, números primos até 100:
let i = 2;
let j = 1;
let soma = 0;
console.log(`Números primos de 1 até 20 é: `);
while(i < 20){
j = 2;
while(j < i){
if(i % j ==0){
j = i + 1;
}else{
j = j + 1;
}
}
if( j == i ){
console.log(i)
soma = soma + i;
}
i = i +1;
}

console.log(`soma dos números primos: ${soma.toLocaleString("pt-BR") }`)

// verificar se um numero é primo em javascript
function isPrime(n) 
{
    if (n<=1) return false;
    for (var i = 2; i <= n-1; i++)
        if (n % i == 0) return false;
    return true;
}

console.log(isPrime(70));
console.log(isPrime(23));