
  const form = document.querySelector('form');
  const titleInput = document.getElementById('todo-title');
  const completedCheckbox = document.getElementById('todo-completed');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const title = titleInput.value;
    const completed = completedCheckbox.checked;

    const postObject = {
      title: title,
      completed: completed
    };

    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postObject)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('New post created:', data);
      } else {
        console.log('Failed to create a new post.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });

