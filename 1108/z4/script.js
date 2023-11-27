const tab = [10, 11, 'ania', 11];
function f() {
    const x = document.getElementById("x").value;
    const xS = x.toString();
    const filtered = [];
    for (let i = 0; i < tab.length; i++) {
        const item = tab[i];
        if (item === xS || item == x) {
            filtered.push(item);
        }
    }
    alert("Przefiltrowana tablica: " + filtered);
}
