function vdot(a, b) 
{
    if (a.length !== b.length) 
    {
      throw new Error("向量 a 和向量 b 的維度不相等");
    }
  
    let dot = 0;
    for (let i = 0; i < a.length; i++) 
    {
      dot += a[i] * b[i];
    }
  
    return dot;
  }
  let a = [1, 2, 3];
  let b = [4, 5, 6];
  console.log(`vdot(${a}, ${b}) = ${vdot(a, b)}`);