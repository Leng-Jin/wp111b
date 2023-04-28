let main = document.querySelector('#main')

let page =
{
    '#abouts':
    `
aboutus/
aboutus/
aboutus/
aboutus/
    `

    '#example1':
    `
example1/
example1/
example1/
example1/
example1/
    `
    ,
    '#example2':`example2`,
    '#example3':`example3`,
}

window.onhashchange = function() 
{
    let hash = window.location.hash
    main.innerHTML =page[hash] 
}