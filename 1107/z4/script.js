function anagram() {
    var word1 = document.getElementById("s1").value;
    var word2 = document.getElementById("s2").value;
    if (word1.length !== word2.length) {
        alert("różna długość");
    } else {
        var w1 = sortString(word1);
        var w2 = sortString(word2);
        if (w1 === w2) {
            alert("anagram");
        } else {
            alert("nie anagram");
        }
    }
}
function sortString(str) {
    var znak = str.split('');
    var posort = [];
    for (var i = 0; i < znak.length; i++) {
        var char = znak[i];
        var inserted = false;
        for (var j = 0; j < posort.length; j++) {
            if (char.charCodeAt(0) < posort[j].charCodeAt(0)) {
                posort.splice(j, 0, char);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            posort.push(char);
        }
    }
    return posort.join('');
}
