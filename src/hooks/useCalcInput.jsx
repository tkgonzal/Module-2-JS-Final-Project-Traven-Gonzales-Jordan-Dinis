// useCalcInput.jsx
import React from "react"

import EncounterCalculator from "../data/EncounterCalculator"

// Constants
const encounterCalculator = new EncounterCalculator()

function useCalcInput() {
    const [calcInput, setCalcInput] = React.useState(() => ({
        partyLevel: 1,
        partySize: 4,
        threat: "moderate"
    }))

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

    return {
        calcInput,
        onInputChange,
        preventKeyPress,
        encounterCalculator
    }
}

export default useCalcInput
