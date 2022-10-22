function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('user-input');
    var userPw = document.getElementById('password-input');
    

    if(userName.value == storedName && userPw.value == storedPw){
        window.location="resume.html";
        alert('You are logged in.');
        
        
    }else{
        alert('Invalid Username/Password');
    }
}