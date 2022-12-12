import { printPrimes } from '@gopal612-js-lib';          // Can not use import statement outside a module
import { generateRandomNumber } from '@gopal612-js-lib';

document.getElementById('printPrimesId').addEventListener('click', printPrimes23);

function printPrimes23() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var blah1 = printPrimes(num1, num2);
    document.getElementById('results23').innerHTML = blah1;
    var blah2 = generateRandomNumber();
    console.log('Primes ==> ', blah1);
    console.log('Random no between 0-100 ===> ', blah2);    
}