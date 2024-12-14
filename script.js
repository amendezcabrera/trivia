const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result');
const answers = document.querySelectorAll('.answer');

answers.forEach(answer => {
    answer.addEventListener('click', () => {
        if (answer.textContent === 'Paris') {
            resultContainer.textContent = 'Correct!';
            resultContainer.style.color = 'green';
        } else {
            resultContainer.textContent = 'Wrong! Try again.';
            resultContainer.style.color = 'red';
        }
    });
});
