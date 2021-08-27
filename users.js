function usersDetails (){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(data => userName(data));
}

function userName (data){

   const ul = document.getElementById('unOrderList');
   for(const user of data){
    const li = document.createElement('li');
    li.innerText = `Name: ${user.name} , Email: ${user.email}`;
    ul.appendChild(li); 

   }


}