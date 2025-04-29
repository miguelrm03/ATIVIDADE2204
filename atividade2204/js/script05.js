const secret = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const feedback = document.getElementById("feedback");

  if (guess === secret) {
    feedback.textContent = "Parabéns! Você acertou!";
  } else if (guess < secret) {
    feedback.textContent = "O número é maior.";
  } else {
    feedback.textContent = "O número é menor.";
  }
}