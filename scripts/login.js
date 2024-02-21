document.addEventListener('DOMContentLoaded', function(){

    const usrnmInput = document.getElementById("username");
    const pwdInput = document.getElementById("password");

    const usr = "ls239n33";
    const pwd = "lossantosstaff";

    function loginHandler(){
       const enteredid = usrnmInput.value;
       const enteredpwd = pwdInput.value;

       if (enteredid == usr && enteredpwd == pwd){
        sessionStorage.setItem('isLoggedIn', 'true');
        alert('access granted');
        window.location.href = ('/dashboard.html');
       }else{
        alert('!invalid credentials!');
       }
    }

    const listenButton = document.getElementById("login-button");
    listenButton.addEventListener('click',loginHandler);

})