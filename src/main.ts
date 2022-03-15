import './style.css'

console.clear()

const teamOnePlusButton = document.querySelector('.team1 i.add')
const teamOneMinusButton = document.querySelector('.team1 i.subtract')
const teamOneScoreText = document.querySelector('.team1 h3')
const teamOneNameInput = document.querySelector('.team1 input')
const teamOneNameText = document.querySelector('.team1 h2')
const winnerMessage = document.querySelector('h1')
let teamOneScore = 0

const teamTwoPlusButton = document.querySelector('.team2 i.add')
const teamTwoMinusButton = document.querySelector('.team2 i.subtract')
const teamTwoScoreText = document.querySelector('.team2 h3')
const teamTwoNameInput = document.querySelector('.team2 input')
const teamTwoNameText = document.querySelector('.team2 h2')
let teamTwoScore = 0

// Team One Plus Button
function handleClickOnTeamOnePlusButton() {
  if (teamOneScore === 2) {
    console.debug('ooops!')
    // QUESTION winnerMessage not displaying variable in h1
    if (teamOneNameText) {
      let winningTeam = teamOneNameText
      winnerMessage!.textContent = `${winningTeam} won!!`
    }
    return
  }

  teamOneScore++

  if (teamOneScoreText) {
    teamOneScoreText.textContent = `${teamOneScore}`
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
  // if (teamOneNameText) {
  //   teamOneNameText.textContent = 'Team 1'
  //   return
  // }

  const inputThatWasChanged = event.target

  if (inputThatWasChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatWasChanged.value

    if (teamOneNameText) {
      teamOneNameText.textContent = textThatWasInput
      return
    }
  }
}
teamOneNameInput?.addEventListener('input', teamOneNameInputChange)

// Team Two Plus Button
function handleClickOnTeamTwoPlusButton() {
  if (teamTwoScore === 2) {
    console.debug('ooops!')

    return
  }
  teamTwoScore++

  if (teamTwoScoreText) {
    teamTwoScoreText.textContent = `${teamTwoScore}`
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
  const inputThatWasChanged = event.target

  if (inputThatWasChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatWasChanged.value

    if (teamTwoNameText) {
      teamTwoNameText.textContent = textThatWasInput
    }
  }
}
teamTwoNameInput?.addEventListener('input', teamTwoNameInputChange)

// Reset Button
const resetButton = document.querySelector('aside')

function clickOnResetButton() {
  teamOneScore = 0
  teamTwoScore = 0

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
