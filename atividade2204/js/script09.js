function converter() {
    const horas = parseFloat(document.getElementById("horas").value);
    const minutos = horas * 60;
    const segundos = horas * 3600;
  
    document.getElementById("saida").textContent = `${horas} horas equivalem a ${minutos} minutos e ${segundos} segundos.`;
  }