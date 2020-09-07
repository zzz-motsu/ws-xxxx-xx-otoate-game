
const PROBLEM_COUNT = 5

const context = {
  score: 0,
  count: 1,
  answer: null,
  playerElement: document.querySelector('#player'),
  playButton: document.querySelector('.play'),
  scaleButtons: document.querySelectorAll('.sound'),
  scoreText: document.querySelector('.score'),
  answerCount: document.querySelector('.answer-count')
}

const soundFiles = [
  '01_do',
  '02_re',
  '03_mi',
  '04_fa',
  '05_do',
  '06_ra',
  '07_shi'
]

const incrementCount = () => {
  context.count++
}

const updateScore = () => {
  context.scoreText.innerText = context.score
}

const updateAnswerCount = () => {
  context.answerCount.innerText = Math.min(context.count, PROBLEM_COUNT)
}

const makeQuestion = () => {
  context.answer = Math.floor(Math.random() * soundFiles.length)
  const fileName = soundFiles[context.answer]
  context.playerElement.setAttribute('src', `assets/mp3/${fileName}.mp3`)

}

const checkAnswer = (ans) => {
  const { score, answer } = context
  if (soundFiles[answer] === ans) {
    context.score += 200
  } else {
    context.score = Math.max(score - 30, 0)
  }
  updateScore()
  return soundFiles[answer] === ans
}


const subscribe = () => {
  const { playerElement, playButton, scaleButtons } = context
  makeQuestion()
  updateScore()
  updateAnswerCount()

  playButton.addEventListener('click', () => {
    if (context.count > PROBLEM_COUNT) {
      return
    }
    playerElement.play()
  })

  scaleButtons.forEach(item => {
    item.addEventListener('click', (e) => {
      if (context.count > PROBLEM_COUNT) {
        return
      }
      const ans = e.target.getAttribute('data-key')
      document.getElementById(ans).play()
      if (checkAnswer(ans)) {
        makeQuestion()
        incrementCount()
        updateAnswerCount()
      }
    })
  })
}

subscribe()
