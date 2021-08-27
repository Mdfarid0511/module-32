
document.getElementById('new-fetch').addEventListener('click',function(){

   fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(Response => Response.json())
   .then(data => console.log(data))



})


