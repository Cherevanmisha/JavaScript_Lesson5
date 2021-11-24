// - Дано натуральное число n. Выведите все числа от 1 до n.


// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания, если A < B, или в порядке убывания в противном случае.


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let fooFun =(arr,index)=>{
//     let array = [...arr];
//     if (index < array.length - 1) {
//         let ret = array[index];
//         array[index] = array[index + 1];
//         array[index + 1] = ret;
//     }
//     return array
// }
// let fooFun1 = fooFun([9, 8, 0, 4], 0);
// console.log(fooFun1)
// let fooFun2 = fooFun([9, 8, 0, 4], 1);
// console.log(fooFun2)
// let fooFun3 = fooFun([9, 8, 0, 4], 2);
// console.log(fooFun3)



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// let funArr = (array) => {
//     let arr = [...array];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === 0) {
//             arr.splice(i, 1);
//             arr.push(0);
//         }
//     }
//     return arr
// };
// let funArr1 = funArr([1,0,6,0,3]);
// console.log(funArr1)
// let funArr2 = funArr([0,1,2,3,4] );
// console.log(funArr2)
// let funArr3 = funArr([0,0,1,0] );
// console.log(funArr3)
