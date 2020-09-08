function calcular() {
      
    var nome = document.getElementById('nome').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var resultado = document.getElementById('resultado')
    var imc = (peso / (altura * altura)).toFixed(1)
    
    if (imc <= 10) {
      resultado.innerHTML = `${nome} você está com desnutrição de Grau 5`
    } else if (imc <= 12.9 && imc > 10) {
      resultado.innerHTML = `${nome} você está com desnutrição de Grau 4`
    } else if (imc <= 15.9 && imc > 13) {
      resultado.innerHTML = `${nome} você está com desnutrição de Grau 3`
    } else if (imc <= 16.9 && imc > 16) {
      resultado.innerHTML = `${nome} você está com desnutrição de Grau 2`
    }else if (imc <= 18.4 && imc > 17) {
      resultado.innerHTML = `${nome} você está com desnutrição de Grau 1`
    } else if (imc <= 24.9 && imc > 18.5) {
      resultado.innerHTML = `${nome} seu peso está Normal`
    }else if (imc <= 29.9 && imc > 25) {
      resultado.innerHTML = `${nome} você está com pré-obesidade`
    }else if (imc <= 34.5 && imc > 30) {
      resultado.innerHTML = `${nome} você está com obesidade de Grau 1`
    }else if (imc <= 39.9 && imc > 35) {
      resultado.innerHTML = `${nome} você está com obesidade de Grau 2`
    }else if (imc > 40) {
      resultado.innerHTML = `${nome} você está com obesidade de Grau 3`
    }
    }