import './style.css'

console.clear()

const teamOnePlusButton = document.querySelector('.team1 i.add')
const teamOneMinusButton = document.querySelector('.team1 i.subtract')
const teamOneScoreText = document.querySelector('.team1 h3')
const teamOneNameInput = <HTMLInputElement>(
  document.querySelector('.team1 input')
)
const teamOneNameText = document.querySelector('.team1 h2')
const winnerMessage = document.querySelector('h1')
const freshInputs = document.querySelectorAll('input')!
console.log(freshInputs)
freshInputs.forEach((input) => (input.value = ''))

let teamOneScore = 0

const teamTwoPlusButton = document.querySelector('.team2 i.add')
const teamTwoMinusButton = document.querySelector('.team2 i.subtract')
const teamTwoScoreText = document.querySelector('.team2 h3')
const teamTwoNameInput = <HTMLInputElement>(
  document.querySelector('.team2 input')
)
const teamTwoNameText = document.querySelector('.team2 h2')
let teamTwoScore = 0

// Team One Plus Button
function handleClickOnTeamOnePlusButton() {
  if (teamOneScoreText) {
    teamOneScoreText.textContent = `${teamOneScore}`
  }

  if (teamOneScore === 2) {
    console.debug('ooops!')
    // QUESTION winnerMessage not displaying variable in h1
    if (teamOneNameText) {
      let winningTeam = teamOneNameText
      console.log(winningTeam)
      winnerMessage!.textContent = `${winningTeam.innerHTML} won!!`
    }
    return
  }
  teamOneScore++

  if (teamOneScore >= 2) {
    return
  }
}

teamOnePlusButton?.addEventListener('click', handleClickOnTeamOnePlusButton)

// Team One Minus Button
function handleClickOnTeamOneMinusButton() {
  if (teamOneScore === 0) {
    console.debug('ooops!')

    return
  }

  teamOneScore--

  if (teamOneScoreText) {
    teamOneScoreText.textContent = `${teamOneScore}`
  }
}

teamOneMinusButton?.addEventListener('click', handleClickOnTeamOneMinusButton)

// Team One Name Input
function teamOneNameInputChange(event: Event) {
  // QUESTION: ADD guard clause to protect 'Team 1' from disappearing after deleted text.
  console.log(teamOneNameInput)

  const inputThatWasChanged = event.target

  if (inputThatWasChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatWasChanged.value
    if (teamOneNameInput.value === '') {
      teamOneNameText!.innerHTML = 'Team 1'
    } else {
      teamOneNameText!.textContent = textThatWasInput
      return
    }
  }
}

teamOneNameInput?.addEventListener('input', teamOneNameInputChange)

// Team Two Plus Button
function handleClickOnTeamTwoPlusButton() {
  if (teamTwoScoreText) {
    teamTwoScoreText.textContent = `${teamTwoScore}`
  }

  if (teamTwoScore === 2) {
    console.debug('ooops!')
    // QUESTION winnerMessage not displaying variable in h1
    if (teamTwoNameText) {
      let winningTeam = teamTwoNameText
      console.log(winningTeam)
      winnerMessage!.textContent = `${winningTeam.innerHTML} won!!`
    }
    return
  }
  teamTwoScore++

  if (teamTwoScore >= 2) {
    return
  }
}

teamTwoPlusButton?.addEventListener('click', handleClickOnTeamTwoPlusButton)

// Team Two Minus Button
function handleClickOnTeamTwoMinusButton() {
  if (teamTwoScore === 0) {
    console.debug('ooops!')

    return
  }

  teamTwoScore--

  if (teamTwoScoreText) {
    teamTwoScoreText.textContent = `${teamTwoScore}`
  }
}

teamTwoMinusButton?.addEventListener('click', handleClickOnTeamTwoMinusButton)

// Team Two Name Input
function teamTwoNameInputChange(event: Event) {
  // ADD guard clause to protect 'Team 1' from disappearing after deleted text.
  // if (teamOneNameText === null) {
  //   // console.debug('ooops!')
  //   teamOneNameText.textContent = 'Team 1'
  // }
  console.log(teamTwoNameInput)

  const inputThatWasChanged = event.target

  if (inputThatWasChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatWasChanged.value
    if (teamTwoNameInput.value === '') {
      teamTwoNameText!.innerHTML = 'Team 2'
    } else {
      teamTwoNameText!.textContent = textThatWasInput
      return
    }
  }
}
teamTwoNameInput?.addEventListener('input', teamTwoNameInputChange)

// Reset Button
const resetButton = document.querySelector('aside')

function clickOnResetButton() {
  teamOneScore = 0
  teamTwoScore = 0
  freshInputs.forEach((input) => (input.value = ''))

  if (teamOneScoreText) {
    teamOneScoreText.textContent = `${teamOneScore}`
  }
  if (teamTwoScoreText) {
    teamTwoScoreText.textContent = `${teamTwoScore}`
  }
  if (teamOneNameText) {
    teamOneNameText.textContent = 'Team 1'
  }
  if (teamTwoNameText) {
    teamTwoNameText.textContent = 'Team 2'
  }
  // QUESTION: this doesn't work
  if (teamOneNameInput) {
    teamOneNameInput.textContent = 'Team 1 Name'
  }
  if (teamTwoNameInput) {
    teamTwoNameInput.textContent = 'Team 2 Name'
  }
}
resetButton?.addEventListener('click', clickOnResetButton)
