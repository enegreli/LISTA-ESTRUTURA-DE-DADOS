function verificarMultiplos() {
    var valorA = parseInt(document.getElementById("valorA").value);
    var valorB = parseInt(document.getElementById("valorB").value);
  
    var resultado = document.getElementById("resultado");
  
    if (isNaN(valorA) || isNaN(valorB)) {
      resultado.textContent = "Por favor, insira valores válidos.";
      resultado.style.color = "red";
    } else {
      if (valorA % valorB === 0 || valorB % valorA === 0) {
        resultado.textContent = "São múltiplos.";
        resultado.style.color = "green";
      } else {
        resultado.textContent = "Não são múltiplos.";
        resultado.style.color = "orange";
      }
    }
  }
  