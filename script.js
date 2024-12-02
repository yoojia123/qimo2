document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止默认提交行为
    
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    
    // 简单验证
    if (userId && password) {
    window.location.href = "searchh.html";
    } else {
    alert("请输入用户名和密码！");
    }
    });
    } else {
    console.log("loginForm 表单未找到");
    }
    });