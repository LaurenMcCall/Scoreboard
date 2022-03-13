import './style.css'

console.clear()
// Assign an event to the input fields to automatically
// change the team's name as the user types.
// QUESTION: would this be a window prompt and then assigning that input
// to the h2?

// Assign click events to the buttons to update the corresponding values on the page.
// The score buttons should adjust the current score by a "hard-coded" value.

const teamOnePlusButton = document.querySelector('.team1 i.add')
const teamOneMinusButton = document.querySelector('.team1 i.subtract')
const teamOneScoreText = document.querySelector('.team1 h3')
let teamOneScore = 0

const teamTwoPlusButton = document.querySelector('.team2 i.add')
const teamTwoMinusButton = document.querySelector('.team2 i.subtract')
const teamTwoScoreText = document.querySelector('.team2 h3')
let teamTwoScore = 0

function handleClickOnTeamOnePlusButton() {
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

function handleClickOnTeamTwoPlusButton() {
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

// teamOnePlusButton?.addEventListener('click', (e) => {
//   console.log(e)
// })

// greenButtonOnPage.addEventListener('click', function () {
//   console.log('Plus one point')
// })
// function clickButton(event: MouseEvent){
//   const thingClickedOn= event.target
//   if(thingClickedOn instanceof HTML)
// }

// const buttonClickedOn = document.querySelector('h3')
// if (buttonClickedOn instanceof HTMLHeadingElement) {
//   buttonClickedOn.textContent = `${scoreCounter}`
// }
