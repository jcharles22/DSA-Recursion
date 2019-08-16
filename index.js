//  1. Counting Sheep

// let sheep = function(x) {
//     if(x === 1) {
//         console.log("All the sheep jumped over the moon");
//     } else {
//         console.log(x +" :Another sheep jumped over the moon")
//         sheep(x-1);
//     }
// }
// sheep(5);



//  2. Power Calculator

// let powerCalculator = function(x, y) {
//     if(y < 0) {
//         return ('exponent should be >= 0')
//     }
//     if(y === 0) {
//         return 1;
//     }
//     else {
//         return x * powerCalculator(x, y-1);
//     }
// }
// console.log(powerCalculator(3,3));



//   3. Reverse String
// let reverse = function(str) {
//     if (str === '') {
//         return "";
//     } else {
//         return (reverse(str.substr(1)) + str.charAt(0))
// }
// }
// console.log(reverse('what you want baby i got it'))



//    4. nth Triangular Number
// function tri(n){
//     if(n <= 1){
//       return n;
//     } else {
//       return n + tri(n-1);
//     }
//   }
  
//   console.log(tri(9));


//   5. String Splitter

// function splitString(str, separator) {
//   const indx = str.indexOf(separator);

//   if (indx === -1) {
//     return str;
//   }
//   const newStr = str.slice(0, indx);
//   return newStr + splitString(str.slice(indx+1), separator);
// }

// console.log(splitString('20/20/20', '/'))


//   6. Fibonacci

// function fibonacci(x) {
//   if (x <= 1) {
//     return [0,1];
//   } else {
//       let ans = fibonacci(x-1);
//       ans.push(ans[ans.length-1] + ans[ans.length-2]);
//       return ans;
//   }  
// }
// console.log(fibonacci(10))


//  7.Factorial

//  function factorial(x) {
//    if(x===1) {
//      return x*1
//    } 
//    else {
//      return x* factorial(x-1)
//    }
//  }
//  console.log(factorial(5));


//  8. Find a way out of the maze;


// 10. Anagrams
function anagrams(str){
  let arr= [];
  //base
  if (str.length === 1){
    arr.push(str);
    return arr;
  }
 
  //general
  for(let i = 0; i < str.length; i++){
    let prefix = str[i];
    let others = str.substring(0, i) + str.substring(i + 1);
    let otherAnagrams = anagrams(others);
    
    for (let j=0; j < otherAnagrams.length; j++){
      arr.push(prefix + otherAnagrams[j]);
    }
  }
  return arr;  
}

let str = 'east';
console.log(anagrams(str));


// 11.Organization Chart

// const org = [
//   {id: 'Zuckerberg', boss: null},
//   {id: 'Schroepfer', boss: 'Zuckerberg'},
//   {id: 'Schrage', boss: 'Zuckerberg'},
//   {id: 'Sandberg', boss: 'Zuckerberg'},
//   {id: 'Bosworth', boss:'Schroepfer' },
//   {id: 'Zhao', boss:'Schroepfer' },
//   {id: 'Steve', boss:'Bosworth' },
//   {id: 'Kyle', boss:'Bosworth' },
//   {id: 'Andra', boss:'Bosworth' },
//   {id: 'Richie', boss: 'Zhao'},
//   {id: 'Sofia', boss: 'Zhao'},
//   {id: 'Jen', boss: 'Zhao'},
//   {id: 'VanDyck', boss:'Schrage' },
//   {id: 'Swain', boss:'Schrage' },
//   {id: 'Sabrina', boss:'VanDyck' },
//   {id: 'Michelle', boss:'VanDyck' },
//   {id: 'Josh', boss:'VanDyck' },
//   {id: 'Blanch', boss:'Swain' },
//   {id: 'Tom', boss:'Swain' },
//   {id: 'Joe', boss:'Swain' },
//   {id: 'Goler', boss:'Sandberg' },
//   {id: 'Hernandez', boss:'Sandberg' },
//   {id: 'Moissinac', boss:'Sandberg' },
//   {id: 'Kelley', boss:'Sandberg' },
//   {id: 'Eddie', boss:'Goler' },
//   {id: 'Julie', boss:'Goler' },
//   {id: 'Annie', boss:'Goler' },
//   {id: 'Rowi', boss:'Hernandez'},
//   {id: 'Inga', boss:'Hernandez'},
//   {id: 'Morgan', boss:'Hernandez'},
//   {id: 'Amy', boss:'Moissinac'},
//   {id: 'Chuck', boss:'Moissinac'},
//   {id: 'Vinni', boss:'Moissinac'},
//   {id: 'Eric', boss:'Kelley'},
//   {id: 'Ana', boss:'Kelley'},
//   {id: 'Wes', boss:'Kelley'},
// ];

// function organize(org, boss) {
//   let node = {};

//   // console.log('bosss', boss)
//   org
//     .filter(item => item.boss === boss)
//     .forEach(item => node[item.id] = organize(org, item.id));
//   return node;  
// }

// console.log(JSON.stringify(organize(org, null)));

// 12. Binary Representation

function binary (number, result = '') {
  if (number === 0) return result;

  result = (number % 2).toString() + result;

  return binary(Math.floor(number / 2), result);
}

console.log(binary(122));