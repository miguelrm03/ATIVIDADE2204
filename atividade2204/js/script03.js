function verificarIdade() {
    const idade = parseInt(document.getElementById('idade').value);
    let faixa = "";
  
    if (idade < 12) {
      faixa = "Criança";
    } else if (idade < 18) {
      faixa = "Adolescente";
    } else if (idade < 60) {
      faixa = "Adulto";
    } else {
      faixa = "Idoso";
    }
  
    document.getElementById('resultado').innerText = `Você é ${faixa}.`;
  }