// Escreva uma função que receba uma array de números e retorne outra array somente com os números pares

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function nPar(_nums){
//     let pares = [];
//     for(let i = 0; i < _nums.lenght; i++){
//         if(_nums[i] % 2 == 0){
//             pares.push(_nums[i]);
//         }
//     }
//     return pares
// }

function nPar(array){
    return array.filter(num => num % 2 == 0)
}

console.log(nPar(nums))