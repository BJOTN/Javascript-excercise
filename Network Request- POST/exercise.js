async function createPost(){

  const post = {
    title: title,
    completed: completed,
  }

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
    const data = await response.json();
    console.log(data)

  } catch (error) {
    
    console.log(error)

  }
}
createPost()
