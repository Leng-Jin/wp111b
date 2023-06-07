function truthTable(n) 
{
    const rowCount = 2 ** n;
    const table = []; 
    
    for (let i = 0; i < rowCount; i++) 
    {
      const row = [];
      
      for (let j = 0; j < n; j++) 
      {
       const value = (i >> j) & 1;
       row.push(value);
      }
      table.push(row);
    }
    return table;
  }