let main = document.querySelector('#main')

let pages =
{
    '#aboutus':`
aboutus/
aboutus/
aboutus/
aboutus/
    `
    ,
    '#example1':`
    <h1><div style=";width:400px;height:30px;text-align:center;line-height:50px;">註冊</DIV></h1>
<form>
    <fieldset style="width: 10cm;: top 10cm;">


        <table>
            <tr>
                <label for="name">名稱</label><br>
                <td><p><input type="text" placeholder="姓氏" /></p></td>
                <td><p><input type="text" placeholder="名字"/></p></td>
            </tr>

        </table>    
        
        <br>

        <table>
            <tr>
                <label for="account">帳號</label><br>
                <td><p><input type="email" placeholder="email帳號"/></p></td>
                <td><p><input type="text" placeholder="密碼"/></p></td>
            </tr>
        
        </table>
        
        <br>

       <table>
        <tr>
            <label for="phone number">電話</label><br>
            <td><p><input type="text" placeholder="手機號碼"/></p></td>
        </tr>
       </table>

       <br>
        
       <table>
        <tr>
            <lable for="other">其他</lable><br>
            <td><p><input type="text" placeholder="血型"/></p></td>
            <td><p><input type="text" placeholder="興趣"/></p></td>
        </tr>
       </table>

       <br>

        <label for="出生日期">出生日期</label><br>
        <p><input type="date" placeholder="生日"/></p>
    
                
        <p>性別<br>
        <input type="radio" name="gender" value="male">男 
        <input type="radio" name="gender" value="female">女
        <input type="radio" name="gender" value="other">其他

    </fieldset>
    `,
    '#example2':`example2`,
    '#example3':`example3`,
}


window.onhashchange = function() 
{
    let hash = window.location.hash
    main.innerHTML =pages[hash]
}