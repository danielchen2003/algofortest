// var uniquePaths = function (m, n) {
//   const dp = Array(m)
//     .fill()
//     .map((item) => Array(n))

//   for (let i = 0; i < m; ++i) {
//     dp[i][0] = 1
//   }

//   for (let i = 0; i < n; ++i) {
//     dp[0][i] = 1
//   }

//   for (let i = 1; i < m; ++i) {
//     for (let j = 1; j < n; ++j) {
//       dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
//     }
//   }
//   console.log(dp)
//   return dp[m - 1][n - 1]
// }

var uniquePaths = function (m, n) {
  // let dp = new Array(m).fill(1).map(() => new Array(n).fill(1));
  let dp = Array(m)
    .fill()
    .map((e) => Array(n))
  console.log(dp)
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = 1
  }
  for (let i = 0; i < dp.length; i++) {
    dp[0][i] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}

console.log(uniquePaths(5, 5))
