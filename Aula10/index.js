/**
 *  Aritmeticos
 * + Adição / Concatenação -> (quando um dos valores é uma string)
 * - Subtracão
 * / Divisão
 * * Multiplicação
 * ** Potenciação
 * % Resto da divisão
 */
// NaN - Not a number parseInt (inteiro), parseFloat(decimais)

const num1 = 5;
const num2 = 10;
const nome = 'Lucas';
const num3 = parseInt('5');
const num4 = parseFloat('5.2');
const num5 = Number('5.2');
const num6 = Number('Lucas'); //NaN
console.log(num1 + num2);
console.log(num1 * nome); //NaN