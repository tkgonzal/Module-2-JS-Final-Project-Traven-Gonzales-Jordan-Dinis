// useEncounterDisplay.jsx
import React from "react"

function useEncounterDisplay() {
    const [encounterDisplay, setEncounterDisplay] = React.useState(() => ({
        encounters: [],
        page: 0,
        numPages: 0,
        partyLevel: undefined,
        partySize: undefined,
        threat: undefined
    }))

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

    return {
        encounterDisplay,
        setEncounterDisplay,
        nextPage,
        prevPage,
        firstPage,
        lastPage
    }
}

export default useEncounterDisplay