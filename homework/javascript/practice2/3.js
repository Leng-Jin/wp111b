function madd(a, b) 
{
    if (a.length !== b.length || a[0].length !== b[0].length) 
    {
      throw new Error("矩陣 a 和矩陣 b 的大小不相等");
    }
  
    const rows = a.length;
    const cols = a[0].length;
    const result = [];
  
    for (let i = 0; i < rows; i++) 
    {
      const row = [];
      
      for (let j = 0; j < cols; j++) 
      {
        row.push(a[i][j] + b[i][j]);
      }
      result.push(row);
    }
    return result;
  }
  let a = [[1, 2], [3, 4]];
  let b = [[5, 6], [7, 8]];
  console.log(`madd(${a}, ${b}) = ${madd(a, b)}`);


