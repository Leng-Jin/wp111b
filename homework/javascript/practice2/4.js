function mmul(a, b) 
{
    if (a[0].length !== b.length) 
    {
      throw new Error("矩陣 a 的列數不等於矩陣 b 的行數");
    }
  
    const rows = a.length;
    const cols = b[0].length;
    const n = a[0].length;
  
    const result = [];
    for (let i = 0; i < rows; i++) 
    {
      result[i] = [];
      for (let j = 0; j < cols; j++) 
      {
        let sum = 0;
        for (let k = 0; k < n; k++) 
        {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
    return result;
  }
  let a = [[1, 2, 3], [4, 5, 6]];
  let b = [[7, 8], [9, 10], [11, 12]];
  console.log(`mmul(${a}, ${b}) = ${mmul(a, b)}`);
