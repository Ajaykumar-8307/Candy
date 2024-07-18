const scriptURL = 'https://script.google.com/macros/s/AKfycbwi8WkhwOvAbW9nHK0Nflw7ycLjR1ZtfRXCZ8CzJilMQ9LM7GLnBMKp6c4l4RxBoQM/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})