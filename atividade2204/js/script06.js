function calcularFatorial() {
    let n = parseInt(document.getElementById("num").value);
    let resultado = 1;
  
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
  
    document.getElementById("resultado").textContent = `Fatorial de ${n} é ${resultado}`;
  }