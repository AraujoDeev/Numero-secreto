const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeack)

function onSpeack(e) {
  chute = e.results[0][0].transcript
  exibeChuteNaTela(chute)
  verificaSeOChutePossuiUmValorValido(chute)

  if (chute == 'game over') {
    document.body.style.backgroundColor = ''
    document.body.innerHTML = `
    <div class='game-over'>Fim de Jogo!</div>
    <button id='game-over' class='btn-jogar'>Reiniciar o jogo</button>
    `
  }

  if (chute == 'reiniciar') {
    window.location.reload()
  }
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
  <div>Você disse</div>
  <span class='box'>${chute}</span>
  `
}

document.body.addEventListener('click', (e) => {
  console.log(e)
  if (e.target.id == 'game-over') {
    window.location.reload()
  }
})

recognition.addEventListener('end', () => recognition.start())
