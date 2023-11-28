var url = 'https://jsonplaceholder.typicode.com/posts';

// Funkcja do wykonania żądania HTTP
var fetchData = async () => {
  try {
    var odpowiedz = await fetch(url);
    if (odpowiedz.status === 200) {
      var data = await odpowiedz.json();    
      console.log('odpowiedz:', data);
      data.forEach(({ title, body }) => {
        console.log('Title:', title);
        console.log('Body:', body);
      });
    } else {
      console.error('Error:', odpowiedz.statusText);
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
};
fetchData();