const obietnica = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Udało się!');
    }, 5000);
  });
  
  obietnica.then((wynik) => {
    console.log(wynik); 
  });
  