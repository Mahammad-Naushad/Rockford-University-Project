function getDetails(){
    var user=$('#username').val();
    var pswd=$('#password').val();
    

    if(localStorage.getItem("name")==null)
    {
        localStorage.setItem("name","Welcome "+user);
        document.getElementById("result").innerHTML = localStorage.getItem("name");
    }
    else{
        if(localStorage.getItem("name")!=user){
            localStorage.setItem("name","Welcome "+user);
        document.getElementById("result").innerHTML = localStorage.getItem("name");
        }        
    }
}
function check(){    
    document.getElementById("result").innerHTML = localStorage.getItem("name");
}