function verificarAnoBissexto() {
    var ano = parseInt(document.getElementById("ano").value);
  
    var resultado = document.getElementById("resultado");
  
    if (isNaN(ano)) {
      resultado.textContent = "Por favor, insira um ano válido.";
      resultado.style.color = "red";
    } else {
      if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        resultado.textContent = ano + " é um ano bissexto.";
        resultado.style.color = "green";
      } else {
        resultado.textContent = ano + " não é um ano bissexto.";
        resultado.style.color = "orange";
      }
    }
  }
  