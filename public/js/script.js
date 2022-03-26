alert('Hello, script is loaded');

window
  .fetch('http://localhost:8000/api/v1/tours', )
  .then((res) => res.json())
  .then((data) => console.log('browser data => ', data));
