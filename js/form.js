const scriptURL = 'https://script.google.com/macros/s/AKfycbxs2aUbQx5dGSYIvl_adS9BhzhfZTGN8S5D7cMFGFUjjBzg9Mf-/exec'
const form = document.forms['submit-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
