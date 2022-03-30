function validateform(){
    var name = document.myform.name.value;
    var password = document.myform.password.value;
    if (name == null || name == ""){
        alert("Name can't be black");
        return false;
    }
    else if (password.length <= 5){
        alert("Password must be more than 5 characters long");
        return false;
    }
}