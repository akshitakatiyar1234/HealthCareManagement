var signupButton = document.getElementById('signUpBtn');

signupButton.addEventListener('click',(event)=>{
    
    
    var signUpPassword = document.getElementById('signuppassword').value;
    var confirmPassword = document.getElementById('signupconfirmpassword').value;
    if(signUpPassword!= confirmPassword){
        alert('Password do not match ');
       // event.preventDefault();
    }
    else{
        location.reload();
    }
});