import './style.css'

// Assign an event to the input fields to automatically
// change the team's name as the user types.
// QUESTION: would this be a window prompt and then assigning that input
// to the h2?

// Assign click events to the buttons to update the corresponding values on the page.
// The score buttons should adjust the current score by a "hard-coded" value.
// function buttonClick(event)
// let scoreCounter = 0
// scoreCounter++

const teamOnePlusButton = document.querySelector('i')
const teamOneMinusButton = document.querySelector('i.subtract')
const teamOneScoreText = document.querySelector('h3')
let teamOneScore = 0

function handleClickOnTeamOnePlusButton() {
  teamOneScore++

  console.log(teamOneScore)
}
teamOnePlusButton?.addEventListener('click', handleClickOnTeamOnePlusButton)

function handleClickOnTeamOneMinusButton() {
  teamOneScore--
  console.log(teamOneScore)
}
teamOneMinusButton?.addEventListener('click', handleClickOnTeamOneMinusButton)

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
