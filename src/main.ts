import './style.css'

console.clear()

const teamOnePlusButton = document.querySelector('.team1 i.add')
const teamOneMinusButton = document.querySelector('.team1 i.subtract')
const teamOneScoreText = document.querySelector('.team1 h3')
const teamOneNameInput = document.querySelector('.team1 input')
const teamOneNameText = document.querySelector('.team1 h2')
let teamOneScore = 0

const teamTwoPlusButton = document.querySelector('.team2 i.add')
const teamTwoMinusButton = document.querySelector('.team2 i.subtract')
const teamTwoScoreText = document.querySelector('.team2 h3')
const teamTwoNameInput = document.querySelector('.team2 input')
const teamTwoNameText = document.querySelector('.team2 h2')
let teamTwoScore = 0

function handleClickOnTeamOnePlusButton() {
  if (teamOneScore === 21) {
    console.debug('ooops!')

    return
  }
  teamOneScore++

  if (teamOneScoreText) {
    teamOneScoreText.textContent = `${teamOneScore}`
  }
}

teamOnePlusButton?.addEventListener('click', handleClickOnTeamOnePlusButton)

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

function teamOneNameInputChange(event: Event) {
  // ADD guard clause to protect 'Team 1' from disappearing after deleted text.
  // if (teamOneNameText === null) {
  //   // console.debug('ooops!')
  //   teamOneNameText.textContent = 'Team 1'
  // }
  const inputThatWasChanged = event.target

  if (inputThatWasChanged instanceof HTMLInputElement) {
    const textThatWasInput = inputThatWasChanged.value

    if (teamOneNameText) {
      teamOneNameText.textContent = textThatWasInput
    }
  }
}
teamOneNameInput?.addEventListener('input', teamOneNameInputChange)

// Starts Team Two
function handleClickOnTeamTwoPlusButton() {
  if (teamTwoScore === 21) {
    console.debug('ooops!')

    return
  }
  teamTwoScore++

  if (teamTwoScoreText) {
    teamTwoScoreText.textContent = `${teamTwoScore}`
  }
}

teamTwoPlusButton?.addEventListener('click', handleClickOnTeamTwoPlusButton)

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
