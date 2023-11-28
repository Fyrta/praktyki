var arr1 = ["Anna", "Maria"];
var arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
var numbers = [1, 2, 3, 4, 5];



var arr_sum = arr1.concat(arr2);
console.log("połączone tablice ", arr_sum);

var rev_arr2 = arr2.reverse();
console.log("ostatni element ", rev_arr2[0]);

var namesEndingWithEk = arr2.filter(item => item.endsWith("ek"));
console.log("imiona z końcówką ek ", namesEndingWithEk);

var suma = numbers.reduce((a, b) => a + b, 0);
console.log("suma numbers ", suma);

var magik = numbers.map(item => item ** 2 + 3);
console.log("matma jakaś ", magik);

// dodatkowe

var filtr = numbers.filter((number) => number % 2 === 0);
console.log("filtrowane numbers ", filtr);

var smallest = (array) => array.length === 1 ? array[0] : Math.min(array[0], smallest(array.slice(1)));
var min = smallest(numbers);
console.log("najmniejszy w numbers ", min);
