function vladiate(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    var cpass=document.getElementById("confrim").value;
    var result=document.getElementById("result");
    result.setAttribute("class","alert theme-danger text-center d-block")
    result.style.background="#f7d6d9";
    if(name==""&&email==""&&pass==""&&cpass==""){
        result.innerHTML="Enter Data";
        return false;
    }
    else if(name.length>15||name.length<5){
        result.innerHTML="Enter 5-15 charcter in name";
        return false;
    }else if(email.indexOf("@",1)==-1||email.indexOf(".com",3)==-1){
        result.innerHTML="Enter valid email";
        return false;
    }else if(pass.length<8){
        result.innerHTML="Weak password";
        return false;
    }else if(pass!=cpass){
        result.innerHTML="Matched password";
        return false;
    }
    
    return true;
}
