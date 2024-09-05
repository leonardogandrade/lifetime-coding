namespace words {
  function repeatedString(s: string, n: number) {
    // let occurances = s.split("a").length - 1;
    // let max = Math.floor(n / s.length);
    // let totalAs = occurances * max;
    // let mod = n % s.length;
    // let inc = s.slice(0, n % s.length);
    // let inc_split = inc.split("a");
    // let inc_ = inc_split.length - 1;
    // totalAs += inc_;
    // return totalAs;

    let occurances = s.split("a").length - 1;
    // Razão de possíveis repetições da string orignal para chegar ao total de repetições
    // ex: 'aba' = 3 ; n = 5 ; 5 / 3 = 1.6666 repetições de 'aba' para virar 'abaab'
    let max = Math.floor(n / s.length);
    let totalAs = occurances * max;
    totalAs += s.slice(0, n % s.length).split("a").length - 1;
    return totalAs;
  }
  const result = repeatedString("aba", 5);
  console.log(result);
}

// function repeatedString(s: string, n: number): number {
//   let aux: string = "";

//   while (aux.length < n) {
//     aux += s;
//   }

//   const total = aux
//     .split("")
//     .slice(0, n + 1)
//     .filter((value) => value === "a");
//   return total.length;
// }

// namespace Steps {
//   function countingValleys(steps: number, path: string): number {
//     let valleySteps = 0;
//     let totalVallyes = 0;
//     const way: string[] = path.split("");

//     for (let idx = -1; idx < steps - 1; idx++) {
//       if (way[idx] === "D") {
//         valleySteps -= 1;
//       } else {
//         valleySteps += 1;
//       }
//       if (valleySteps === 0 && way[idx] === "D") totalVallyes += 1;
//     }
//     return totalVallyes;
//   }
//   const path = "DDUUDDUDUUUD";
//   const steps = path.length;
//   const result = countingValleys(steps, path);

//   console.log(result);
// }

// DDUUDDUDUUUD

//                    / \
// \     / \         /
//   \_/     \_/ \_/

//    D, D,
// 0,-1,-2,
