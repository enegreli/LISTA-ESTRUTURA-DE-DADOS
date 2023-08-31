function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
  
    var media = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10;
  
    var resultado = document.getElementById("resultado");
  
    if (isNaN(media)) {
      resultado.textContent = "Por favor, insira notas válidas.";
      resultado.style.color = "red";
    } else {
      resultado.textContent = "Média: " + media.toFixed(2);
  
      if (media >= 7) {
        resultado.textContent += " - APROVADO";
        resultado.style.color = "green";
      } else if (media >= 5 && media < 7) {
        resultado.textContent += " - RECUPERAÇÃO";
        resultado.style.color = "orange";
      } else {
        resultado.textContent += " - REPROVADO";
        resultado.style.color = "red";
      }
    }
  }
  