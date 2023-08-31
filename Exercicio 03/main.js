function verificarParImpar() {
    var numero = parseInt(document.getElementById("numero").value);
  
    var resultado = document.getElementById("resultado");
  
    if (isNaN(numero)) {
      resultado.textContent = "Por favor, insira um número válido.";
      resultado.style.color = "red";
    } else {
      if (numero % 2 === 0) {
        resultado.textContent = numero + " é um número PAR.";
        resultado.style.color = "green";
      } else {
        resultado.textContent = numero + " é um número ÍMPAR.";
        resultado.style.color = "orange";
      }
    }
  }
  