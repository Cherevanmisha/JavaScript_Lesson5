// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let funNumRan=(a,b,c)=>{
//     let min;
// if(a <= b && a <= c) min = a;
// if(b <= a && b <= c) min = b;
// if(c <= b && c <= a) min = c;
// console.log('min', min);
// return min;
// }
// let fun = funNumRan(7,5,10);
// console.log(fun)






// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let funNumRan=(a,b,c)=>{
//     let max;
// if(a >= b && a >= c) max = a;
// if(b >= a && b >= c) max = b;
// if(c >= b && c >= a) max = c;
// console.log('max', max);
// return max;
// }
// let fun = funNumRan(7,5,10);
// console.log(fun)

// - створити функцію яка повертає найбільше число з масиву
//
// let arrMax = (array) => {
//     let max = array[0];
//     for (const max1 of array) {
//         if (max1 > max) max = max1;
//     }
//     return max;
// };
// let fun = arrMax([7,5,10]);
// console.log(fun)



// - створити функцію яка повертає найменьше число з масиву

// let arrMin = (array) => {
//     let min = array[0];
//     for (const min1 of array) {
//         if (min1 < min) min = min1;
//     }
//     return min;
// };
// let fun = arrMin([7,5,10]);
// console.log(fun)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

// let ret=(array)=>{
//     let i=0;
//     for (const arrayElement of array) {
//         i =i + arrayElement;
//     }
//     return i
// }
// let fun = ret([1,2,10]);
// console.log(fun)



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let ret=(array)=>{
//     let i=0;
//     for (const arrayElement of array) {
//         i =i + arrayElement;
//     }
//     return i/array.length
// }
// let fun = ret([10,10,10]);
// console.log(fun)




// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
// let funMinMax = (...arguments)=>{
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (item>max)  max=item;
//         if (item<min) min = item;
//     }
//     console.log('max', max);
//     return min
// }
// let min = funMinMax(1,45,4,8,41,7896,4,432,712);
// console.log('min', min)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в
// діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let fanRan =()=>{
//     let arr = [];
//     for (let i = 0; i < 100; i++) {
//    arr.push(Math.round(Math.random()*100))
//
//     }
//     return arr
// }
// let fun = fanRan();
// console.log(fun)


// - створити функцію яка заповнює масив рандомними числами в діапазоні
// від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let fanRan =(limit)=>{
//     let arr = [];
//     for (let i = 0; i < fanRan.length; i++) {
//    arr.push(Math.round(Math.random()*limit))
//
//     }
//     return arr
// }
// let fun = fanRan(100);
// console.log(fun)



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let reverse =(arr)=>{
//     let arr2 = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         const arrElement = arr[i];
//         arr2.push(arrElement)
//     }
//     return arr2;
//
// }
// let rev = reverse([1,2,3]);
// console.log(rev)



