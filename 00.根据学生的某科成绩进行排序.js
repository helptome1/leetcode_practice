// 学生成绩的顺序
let socre = [
  { name: 'hzg', math: 90, chinese: 70, english: 60 },
  { name: 'hzg', math: 88, chinese: 77, english: 80 },
  { name: 'hzg', math: 50, chinese: 100, english: 66 },
]
// 根据成绩进行排序
let sort = socre.sort((a, b) => {
  return a.math - b.math
})
console.log(sort)
