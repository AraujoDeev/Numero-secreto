function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor invalido</div>'
    return
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>O numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    return
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h3>Você acertou!</h3>
    <h3>O número secreto era ${numeroSecreto}.</h3>

    <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto e menor <i class="fa-solid fa-down-long"></i></div>
    `
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto e maior <i class="fa-solid fa-up-long"></i></div>
    `
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', (e) => {
  if (e.target.id == 'jogar-novamente') {
    window.location.reload()
  }
})
