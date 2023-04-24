

// 2022年q4季度题
// 1. 找出通过车辆最多的颜色。考察滑动窗口
// 本题为考试多行输入输出规范示例，无需提交，不计分。
// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;
// function findMax(str) {
//     let map = {};
//     let max = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (!map[str[i]]) {
//             map[str[i]] = 1;
//         } else {
//             map[str[i]] += 1;
//         }
//     }
//     for (let item in map) {
//         max = Math.max(max, map[item]);
//     }
//     return max;
// }
// void (async function () {
//     let i = 0;
//     let input = [];
//     let maxRes = 0
//     while ((line = await readline())) {
//         if (i == 0) {
//             input = line.split(" ");
//         } else {
//             let slice = [0, line - 1];
//             // line 大于输入数组时
//             if (line > input.length) {
//                 slice = [0, input.length - 1];
//             }
//             // 当
//             while (slice[1] != input.length) {
//                 let maxNumber = findMax(input.slice(slice[0], slice[1] + 1));
//                 maxRes = Math.max(maxRes, maxNumber)
//                 //滑动数组
//                 slice[0] += 1;
//                 slice[1] += 1;
//             }
//         }
//         i++;
//     }

//     console.log(maxRes);
// })();

// 2.统计匹配的二元组个数。
// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void async function () {
//     // Write your code here
//     const aLength = parseInt(await readline());
//     const bLength = parseInt(await readline());
//     let aArr =  (await readline()).split(" ");
//     let bArr =  (await readline()).split(" ");
//     const aMap = {}
//     let aFilterArr = []
//     for(let i = 0; i < aLength; i++) {
//         if(!aMap[aArr[i]]) {
//             aMap[aArr[i]] = 1
//             aFilterArr.push(aArr[i])
//         } else {
//             aMap[aArr[i]] = aMap[aArr[i]] + 1
//         }
//     }
//     let res = 0
//     for(let i = 0; i < bArr.length; i++) {
//         if(aMap[bArr[i]]) {
//             res += 1 * aMap[bArr[i]]
//         }
//     }
//     console.log(res)

// }()

