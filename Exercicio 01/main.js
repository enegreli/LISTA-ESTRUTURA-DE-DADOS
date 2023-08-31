function findLargerNumber() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    
    var result = document.getElementById("result");
    
    if (isNaN(num1) || isNaN(num2)) {
      result.textContent = "Por favor, insira números válidos.";
    } else {
      if (num1 > num2) {
        result.textContent = "O maior número é: " + num1;
      } else if (num2 > num1) {
        result.textContent = "O maior número é: " + num2;
      } else {
        result.textContent = "Os números são iguais: " + num1 + " e " + num2;
      }
    }
  }
  