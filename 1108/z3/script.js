var tab1 = ['Jan ', 'Paweł ', 'drugi'];
var tab2 = ['był ', 'koneserem ', 'kremówek '];
var tab3 = [];

var words1 = tab1;
var words2 = tab2;

for (var i = 0; i < words1.length; i++) {
    tab3.push(words1[i]);
}

for (var i = 0; i < words2.length; i++) {
    tab3.push(words2[i]);
}

var result = [];

for (var i = 0; i < tab3.length; i++) {
    var word = tab3[i];
    result.push(word);
}

document.write(result);
var tab1 = ['Jan ', 'Paweł ', 'drugi'];
var tab2 = ['był ', 'koneserem ', 'kremówek '];
var tab3 = tab1.concat(tab2);
document.write(tab3);
