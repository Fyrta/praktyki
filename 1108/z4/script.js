const tab = [10, 11, 'ania', 11]
function f(){
    const x = document.getElementById("x").value;
    const filtered = tab.filter(item => item == x.toString() || item == x);

    console.log(filtered);
}