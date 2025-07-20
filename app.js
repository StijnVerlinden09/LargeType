const input = document.getElementById('userInput');
const largeText = document.getElementById('output');

input.addEventListener('input', () => {
    largeText.innerHTML = input.value;
});