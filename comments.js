
fetch ('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then (data => allComments(data));

function allComments(comments){

   const commentContainer = document.getElementById('comment-container');
   for (const comment of comments) {
       
      const div = document.createElement('div');
      div.classList.add('good')
      div.innerHTML = `
      
      <h2> ${comment.title} </h2>
      <p> ${comment.body}</p>
      `
      commentContainer.appendChild(div)
     
   }
   
}