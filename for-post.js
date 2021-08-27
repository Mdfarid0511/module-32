fetch('https://jsonplaceholder.typicode.com/posts',{

    method:'POST',
    body:JSON.stringify({
       Name: 'farid',
       id: 101,
       description:'This is an intresting think',
    }),
   
    Headers:{
      'Content-type': 'application/json; charset=UTF-8',
    },
})
.then(res => res.json())
.then(data => console.log(data));
