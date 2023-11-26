function palindrome(){
    str = document.getElementById("text").value;
    revstr = str.split("").reverse().join("");
    
    if(str == revstr){
        alert("jest palindromem"); 
    }else{
        alert("nie jest palindromem");
    }
}