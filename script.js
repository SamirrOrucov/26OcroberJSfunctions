// let newArr = "salam nece samir";
// logy = newArr.split(" ");

// function includeCheck(array, word) {
//   let checkAnsw = true;

//   for (let i = 0; i < array.length; i++) {
//     if (word === array[i]) {
//       return checkAnsw;
//     }
//   }
//   return false;
// }
// console.log(includeCheck(logy, "salam"));

// ! task 12------->
// function split(number) {
// //   const number = 56987;
//   const arr = String(number).split("");

//   for (let i = 0; i < arr.length; i++) {
//   console.log( arr[i])

//   }

// }
// split(54578)

// function splitNums(number) {
//     number=number.toString()
//     const arr=[]
//     for (let i = 0; i < number.length; i++) {
//         arr.push(number[i])

//     }
//     return arr

// }
// console.log(splitNums(6998));

// task 13-------->

// function findBig(number) {
//     number=number.toString()
//     let bigNum=number[0]
//     for (let i = 0; i < number.length; i++) {
//         if (bigNum<number[i]) {
//             bigNum=number[i]

//         }

//     }
//     return bigNum

// }
// console.log(findBig(5967));

// 14-------->

// function findSmall(number) {
//     number=number.toString()
//     let smallNum=number[0]
//     for (let i = 0; i < number.length; i++) {
//         if (smallNum>number[i]) {
//             smallNum=number[i]

//         }

//     }
//     return smallNum

// }
// console.log(findSmall(5967));

// task 15--------->

// function findParts(number) {
//   number = number.toString();
//   const arr=[]
//   let sum=0
//   let mul=1
//   let mean=0
//   for (let i = 0; i < number.length; i++) {
//     sum +=+number[i]
//     mul *=number[i]

//   }
//   mean =sum/number.length;
//   arr.push(sum,mul,mean)
// return arr

// }
// console.log(findParts(1234));

// 16 17----------------->
// function Bolen(number) {
//     let count=0
//     const arr=[]
//     for (let i = 1; i <= number; i++) {
//         if (number % i===0) {
//             console.log(i);
//             count++
//             arr.push(i,count)

//         }
//     }
//     return arr

// }
// console.log(Bolen(20));

// 18----------------->
// function Bolen(number) {
//         let sum=0
//         let mul=1
//         const arr=[]
//         for (let i = 1; i <= number; i++) {
//             if (number % i===0) {
//                    sum+=i
//                    mul*=i

//             }
//         }
//         arr.push(sum,mul)

//         return arr

//     }
//     console.log(Bolen(20));

// 20-------------------------------->

// function Bolen(number) {
//   let count = 0;
//   let check = true;
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return "murekkeb";
//     }
//   }
//   if (check) {
//     return "sade";
//   }
//   return check;
// }
// console.log(Bolen(23));

// 21------------->

function findSade(start, end) {
  const arr = [];
  check = true;
  for (let i = start; i < end; i++) {
    check = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        check = false;
      }
    }
    if (check) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(findSade(10, 20));

function findSade2(params) {
    
}
