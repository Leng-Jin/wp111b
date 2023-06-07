function truthTable(n) 
{
    const rowCount = 2 ** n;
    const table = []; 
    
    for (let i = 0; i < rowCount; i++) 
    {
      const row = [];
      
      for (let j = n-1; j>=0; j--) 
      {
       const value = (i >> j) & 1;
       row.push(value);
      }
      table.push(row);
    }
    return table;
  }
  console.log("truthTable(0):", truthTable(0));
  console.log("truthTable(1):", truthTable(1));
  console.log("truthTable(2):", truthTable(2));
  console.log("truthTable(3):", truthTable(3));