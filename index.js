//Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('id').innerText = data.id;
    })
    .catch(error => {
      document.getElementById('error').innerText = error.message;
    });
  }