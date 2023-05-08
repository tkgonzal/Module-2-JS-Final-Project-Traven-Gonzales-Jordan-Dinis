// App.jsx
import React from 'react'
import Header from './components/Header.jsx'
import InfoBar from './components/InfoBar.jsx'
import CalculatorForm from './components/CalculatorForm.jsx'
import EncounterPage from './components/EncounterPage.jsx'
import EncounterCalculator from './data/EncounterCalculator.js'
import './styles.css'

function App() {
  const [calcInput, setCalcInput] = React.useState(() => ({
    partyLevel: 1,
    partySize: 4,
    threat: "moderate"
  }))
  const [encounterDisplay, setEncounterDisplay] = React.useState(() => ({
    encounters: [],
    page: 0,
    numPages: 0,
    partyLevel: undefined,
    partySize: undefined,
    threat: undefined
  }))
  const calculator = new EncounterCalculator()

  /**
   * Upon the change of an input element, updates its corresponding
   * member in the calcInput state
   * @param {Event} event The event object for an input change
   */
  function onInputChange(event) {
    const { name, type, value } = event.target

    setCalcInput(prev => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value
    }))
  }

  /**
   * Prevents the user from typing on input
   * @param {Event} event The event object for a keypress
   */
  function preventKeyPress(event) {
    event.preventDefault()
  }

  /**
   * Uses the EncounterCalculator's calculate method to compute 
   * all possible Encounters given the current calcInput state
   * @param {Event} event the event object for a form submit
   */
  function calculate(event) {
    event.preventDefault()
    const calculatedEncounters = calculator.calculate(calcInput.partyLevel,
      calcInput.partySize, calcInput.threat)
    setEncounterDisplay(({
      encounters: calculatedEncounters,
      page: 0,
      numPages: calculatedEncounters.length,
      partyLevel: calcInput.partyLevel,
      partySize: calcInput.partySize,
      threat: calcInput.threat
    }))
  }

  /**
   * Increments the encounterDisplay to be the next page
   */
  function nextPage() {
    setEncounterDisplay(prev => ({
      ...prev,
      page: prev.page < prev.numPages - 1 ? prev.page + 1 : prev.page
    }))
  }

  /**
   * Decrements the encounterDisplay to be the previous page
   */
  function prevPage() {
    setEncounterDisplay(prev => ({
      ...prev,
      page: prev.page > 0 ? prev.page - 1 : prev.page
    }))
  }

  /**
   * Sets the encounterDisplay to the first page
   */
  function firstPage() {
    setEncounterDisplay(prev => ({
      ...prev,
      page: 0
    }))
  }

  /**
   * Sets the encounterDisplay to the last page
   */
  function lastPage() {
    setEncounterDisplay(prev => ({
      ...prev,
      page: prev.numPages > 0 ? prev.numPages - 1 : 0
    }))
  }

  return (
    <>
      <Header />
      <main className="container">
        <InfoBar />
        <CalculatorForm
          calcInput={calcInput}
          onChange={onInputChange}
          preventKeyPress={preventKeyPress}
          calculate={calculate}
        />
        <EncounterPage
          encounterDisplay={encounterDisplay}
          nextPage={nextPage}
          prevPage={prevPage}
          firstPage={firstPage}
          lastPage={lastPage}
          calculator={calculator}
        />
      </main>
    </>
  )
}


export default App

