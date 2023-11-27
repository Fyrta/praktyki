function palindrome() {
    var str = document.getElementById("text").value;
    var revstr = "";

    for (var i = str.length - 1; i >= 0; i--) {
        revstr += str.charAt(i);
    }

    if (str === revstr) {
        alert("jest palindromem");
    } else {
        alert("nie jest palindromem");
    }
}
