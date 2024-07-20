document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rating-form');
    const ratingValue = document.getElementById('rating-value');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const rating = document.querySelector('input[name="rating"]:checked').value;
        
        fetch('https://script.google.com/macros/s/AKfycbwi8WkhwOvAbW9nHK0Nflw7ycLjR1ZtfRXCZ8CzJilMQ9LM7GLnBMKp6c4l4RxBoQM/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `rating=${rating}`
        }).then(response => {
            ratingValue.textContent = "Rating Submitted";
        }).catch(error => {
            console.error('Error:', error);
        });
    });
});
