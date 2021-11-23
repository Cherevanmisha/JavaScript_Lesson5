// Всі функції повинні бути описані стрілочним типом!!!!
//  - створити функцію яка обчислює та повертає площу прямокутника висотою
// let funS = (a,b) =>{
//  return  a*b
// }
// let fun = funS(10,15);
// console.log(fun)

// - створити функцію яка обчислює та повертає площу кола
// let funS = (r) =>{
//
//  return 3.14*Math.pow(r, 2)
// }
// let fun = funS(2);
// console.log(fun)


// - створити функцію яка обчислює та повертає площу циліндру
//
// let funS = (r,h) =>{
//
//  return 2 * 3.14 * r * (h+ r);
// }
// let fun = funS(2,10);
// console.log(fun)



// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr =[10,55,'44',true,'hi']
// let funArr=()=>{
//     for (const argument of arr) {
//         return arr
//     }
// }
// let fun = funArr(arr);
// console.log(fun)


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let funP = (text) => {
//     for (let i = 0; i < 10; i++) {
//         document.write(`<p>${text}</p>`)
//     }
// };
// let fun = funP('hello');
// console.log(fun)

// - створити функцію яка  створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

//  let funP = (text) => {
//     for (let i = 0; i < 3; i++) {
//          document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`</ul>`)
//      }
//  };
// let fun = funP('hello');
//  console.log(fun)


// - створити функцію яка  створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//  let funP = (text,num) => {
//     for (let i = 0; i < num; i++) {
//          document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`</ul>`)
//      }
//  };
// let fun = funP('hello',10);
//  console.log(fun)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
// let arr = [22, true, '24', false, 44, '88'];
// let funArr =(arguments)=>{
//     for (let i = 0; i < arguments.length; i++) {
//         document.write(`<li>${arguments[i]}</li>`)
//     }
// }
// let fun = funArr(arr);
//  console.log(fun)



//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//         {id: 1, name: 'vasya', age: 31 },
//         {id: 2, name: 'petya', age: 30 },
//         {id: 3, name: 'kolya', age: 29},
//         {id: 4, name: 'olya', age: 28}
//     ];
// let funArr =(arguments)=>{
//     for (let i = 0; i < arguments.length; i++) {
//        document.write(`<div>${arguments[i].id}</div> </br>
//                         <div>${arguments[i].name}</div>
//                             <div>${arguments[i].age}</div> `)
//     }
// }
// let fun = funArr(users);
//  console.log(fun)