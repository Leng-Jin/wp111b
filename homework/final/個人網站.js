function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
  }

  let main = document.querySelector('.bigmargin')
  let pages =
  {
      '#home':
      `
      <h1>首頁</h1>
      <p>歡迎來到我的小天地</p>
      <img src="jin.jpg" width="300" height="400"/>
      `
      ,
      '#about':
      `
      <h1>自我介紹</h1>
  
      <tr>
      <img src="瑾.jpg" width="300" height="400"/>
      <p>畢業學校:北門高中</p>
      <p>目前就讀學校:金門大學資訊工程</p>
      <p>出生地 : 台南市 </p>
      <p>生日 : 92.12.08 </p>
      <P>興趣: 追星、聽音樂、追具</p>
     
      </tr>
  
      `
      ,
  
      '#my_project':
      `
      <p>第一個作品 - 個人首頁</p>
      <a href="file:///C:/Users/USER/Desktop/%E9%87%91%E5%A4%A7/%E5%A4%A7%E4%B8%80(%E4%B8%8B)/%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88/text/wp111b/homework/about/aboutme.html">個人首頁</a>
      
      <br>
      <br>
      <p>第二個作品 - 註冊表單</p>
      <a href="file:///C:/Users/USER/Desktop/%E9%87%91%E5%A4%A7/%E5%A4%A7%E4%B8%80(%E4%B8%8B)/%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88/text/wp111b/homework/about/registration-form.html">註冊表單</a>

      <br>
      <br>
      <p>第三個作品 - 期中作業</p>
      <a href="https://github.com/Leng-Jin/wp111b/tree/main/homework/Midterm">chatgpt 寫書</a>

      <br>
      <br>
      <p>第四個作品 - JavaScript 程式練習</p>
      <a href="https://github.com/Leng-Jin/wp111b/tree/main/homework/javascript/practice1">JavaScript 程式練習</a>

      <br>
      <br>
      <p>第五個作品 - JavaScript 練習 2</p>
      <a href="https://github.com/Leng-Jin/wp111b/tree/main/homework/javascript/practice2">JavaScript 練習 2</a>

      <br>
      <br>
      <p>第六個作品 - JavaScript 練習 3</p>
      <a href="https://github.com/Leng-Jin/wp111b/tree/main/homework/javascript/practice3">JavaScript 練習 3</a>

      <br>
      <br>
      <p>第七個作品 - 側欄伸縮功能表</p>
      <a href="https://leng-jin.github.io/wp111b/html/navbarJs.html">側欄伸縮功能表</a>
      <a href="https://leng-jin.github.io/wp111b/html/navbarCSS.html">側欄伸縮功能表</a>

      <br>
      <br>
      <p>第八個作品 - 按下『首頁，註冊，登入，登出』會切換畫面的效果</p>
      <a href="https://leng-jin.github.io/wp111b/homework/navbar2/navbar2.html#signup">切換畫面</a>


      
     
      `
  }
  window.onhashchange = function() 
  {
      let hash = window.location.hash
      main.innerHTML =pages[hash]
  }
