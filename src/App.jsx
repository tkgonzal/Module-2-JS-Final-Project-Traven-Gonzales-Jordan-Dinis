// App.jsx
import React from "react"

import useCalcInput from "./hooks/useCalcInput.jsx"
import useEncounterDisplay from "./hooks/useEncounterDisplay.jsx"

import Header from "./components/Header.jsx"
import InfoBar from "./components/InfoBar.jsx"
import CalculatorForm from "./components/CalculatorForm.jsx"
import EncounterPage from "./components/EncounterPage.jsx"

import "./styles.css"

function App() {
  // State Variables and Functions
  const {
    calcInput,
    onInputChange,
    preventKeyPress,
    encounterCalculator
  } = useCalcInput()
  const {
    encounterDisplay,
    setEncounterDisplay,
    nextPage,
    prevPage,
    firstPage,
    lastPage
  } = useEncounterDisplay()

  /**
     * Uses the EncounterCalculator's calculate method to compute 
     * all possible Encounters given the current calcInput state
     * @param {Event} event the event object for a form submit
     */
  function calculate(event) {
    event.preventDefault()
    const calculatedEncounters = encounterCalculator.calculate(
      calcInput.partyLevel,
      calcInput.partySize,
      calcInput.threat
    )
    setEncounterDisplay(({
      encounters: calculatedEncounters,
      page: 0,
      numPages: calculatedEncounters.length,
      partyLevel: calcInput.partyLevel,
      partySize: calcInput.partySize,
      threat: calcInput.threat
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
          calculator={encounterCalculator}
        />
      </main>
    </>
  )
}


export default App

