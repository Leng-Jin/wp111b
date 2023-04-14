function count(words)
{
    let cmap = {}
    for(let word of words)
    {
        let c = cmap[word]
        if(c==null)
        {
            cmap[word] = 1
        }
        else
        {
            cmap[word] = cmap[word] + 1
        }
    }
    return cmap
}
var list = ['a','dog','chase','a','cat']
var camp = count (list)
console.log(camp)