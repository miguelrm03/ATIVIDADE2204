function validarCPF() {
    let cpf = document.getElementById("cpf").value.replace(/\D/g, '');
  
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      document.getElementById("resposta").textContent = "CPF inválido";
      return;
    }
  
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf[i]) * (10 - i);
    }
  
    let dig1 = (soma * 10) % 11;
    if (dig1 === 10) dig1 = 0;
    if (dig1 != cpf[9]) {
      document.getElementById("resposta").textContent = "CPF inválido";
      return;
    }
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf[i]) * (11 - i);
    }
  
    let dig2 = (soma * 10) % 11;
    if (dig2 === 10) dig2 = 0;
    if (dig2 != cpf[10]) {
      document.getElementById("resposta").textContent = "CPF inválido";
      return;
    }
  
    document.getElementById("resposta").textContent = "CPF válido";
  }
  