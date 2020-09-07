
const PROBLEM_COUNT = 5

const context = {
  score: 0,
  count: 1,
  answer: null,
  playerName: '',
  playerNameElement: document.querySelector('.player-name'),
  playerElement: document.querySelector('#player'),
  playButton: document.querySelector('.play'),
  startButton: document.querySelector('.start-button'),
  scaleButtons: document.querySelectorAll('.sound'),
  scoreText: document.querySelector('.score'),
  answerCount: document.querySelector('.answer-count'),
  scoreList: document.querySelector('.score-list'),
  scenes: {
    start: document.querySelector('.start-scene'),
    game: document.querySelector('.game-scene'),
    result: document.querySelector('.result-scene')
  }
}

const soundFiles = [
  '01_do',
  '02_re',
  '03_mi',
  '04_fa',
  '05_so',
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

const updatePlayerName = () => {
  context.playerNameElement.innerText = context.playerName
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
  context.startButton.addEventListener('click', () => {
    context.playerName = document.querySelector('.input').value
    if (!context.playerName) {
      alert('プレイヤー名を入力してください')
      return
    }
    moveToGame()
  })
}

const moveToGame = () => {
  const { start, game } = context.scenes
  start.classList.add('is-hidden')
  game.classList.remove('is-hidden')

  onLoadGameScene()
}

const moveToResult = () => {
  const { game, result } = context.scenes
  game.classList.add('is-hidden')
  result.classList.remove('is-hidden')

  onLoadResultScene()
}

const onLoadGameScene = () => {
  const { playerElement, playButton, scaleButtons } = context
  updatePlayerName()
  makeQuestion()
  updateScore()
  updateAnswerCount()

  playButton.addEventListener('click', () => {
    playerElement.play()
  })

  scaleButtons.forEach(item => {
    item.addEventListener('click', (e) => {
      if (context.count > PROBLEM_COUNT) {
        moveToResult()
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

const onLoadResultScene = async () => {
  try {
    const record = await createScore({
      name: context.playerName,
      score: context.score
    })
    const data = await fetchScoreList()
    data.forEach((item, index) => {
      const li = document.createElement('li')
      li.classList.add('score-item')
      li.innerHTML = `
        <div>
          <p>
            ${index+1}. ${item.name}
          </p>
        </div>
        <div class="score-result">
          <p>
            ${item.score}
          </p>
        </div>
      `
      if (item._id === record._id) {
        li.classList.add('current')
      }
      context.scoreList.appendChild(li)
    })
  } catch (e) {
    console.error(e)
  }
}

const fetchScoreList = async () => {
  const data = await fetch('http://localhost:3000/scores')
  return await data.json()
}

const createScore = async (params) => {
  const data = await fetch('http://localhost:3000/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  return await data.json() }

subscribe()
