function calculate(dzialanie){
    var l1 = document.getElementById("n1").value;
    var l2 = document.getElementById("n2").value;
    switch (dzialanie){
        case "dod":
            var wynik = l1 + l2;
            //wynik = wynik.toFixed(3);
            alert("wynik to: "+ wynik);
            break;
        case "odm":
            var wynik = l1 - l2;
            //wynik = wynik.toFixed(3);
            alert("wynik to: "+ wynik);
            break;
        case "mnz":
            var wynik = l1 * l2;
            //wynik = wynik.toFixed(3);
            alert("wynik to: "+ wynik);
            break;
        case "dzl":
            var wynik = l1 / l2;
            //wynik = wynik.toFixed(3);
            if(l1 == 0 || l2 == 0){
                alert("nie dzieli się przez 0");
            }else{
                alert("wynik to: "+ wynik);
            }
            break;
    }

    
}
