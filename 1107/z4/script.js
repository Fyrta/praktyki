function anagram(){
    var word1 = document.getElementById("s1").value;
    var word2 = document.getElementById("s2").value;
    if(word1.length != word2.length){
        alert("różna długość");
    }else{
        var w1 = word1.split('').sort().join('');
        var w2 = word2.split('').sort().join('');
        if(w1 === w2){
            alert("anagram");
        }else{
            alert("nie anagram");
        }
    }
}