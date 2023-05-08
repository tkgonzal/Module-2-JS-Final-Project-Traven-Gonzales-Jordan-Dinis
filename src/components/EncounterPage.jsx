// EncounterPage.jsx
import React from "react"
import Creature from "./Creature.jsx"
import { nanoid } from "nanoid"
import backImg from "../assets/backward-step.svg"
import firstImg from "../assets/backward-fast.svg"
import nextImg from "../assets/forward-step.svg"
import lastImg from "../assets/forward-fast.svg"

// The portion of the app that displays each encounter calculated, one
// at a time. Uses the encounterDisplay state to determine which
// encounter to display at a time.

function EncounterPage(props) {
    const notEmpty = props.encounterDisplay.numPages > 0
    let creatures = []

    if (notEmpty) {
        const currEncounter = props.encounterDisplay.encounters[
            props.encounterDisplay.page
        ]

        for (const [creature, quantity] of currEncounter.creatures) {
            creatures.push(
                <Creature
                    key={nanoid()}
                    creature={creature}
                    quantity={quantity}
                    partyLevel={props.encounterDisplay.partyLevel}
                />
            )
        }
    }

    return (
        <section className="encounter-page">
            {notEmpty && <h2 className="encounter-page--current-display">
                PARTY LEVEL: {props.encounterDisplay.partyLevel} |
                PARTY SIZE: {props.encounterDisplay.partySize} |
                THREAT LEVEL: {props.encounterDisplay.threat.toUpperCase()} |
                XP BUDGET: {props.calculator.determineXPBudget(
                    props.encounterDisplay.partySize,
                    props.encounterDisplay.threat
                )}
            </h2>}
            <div className="encounter-page--display">
                {notEmpty && creatures}
            </div>
            <nav className="encounter-page--nav">
                <button
                    className="encounter-page--first"
                    onClick={props.firstPage}
                >
                    <img
                        src={firstImg}
                        alt="First"
                    />
                </button>

                <button
                    className="encounter-page--prev"
                    onClick={props.prevPage}
                >
                    <img
                        src={backImg}
                        alt="Back"
                    />
                </button>

                <span>
                    {
                        notEmpty ? props.encounterDisplay.page + 1 : 0
                    }/
                    {props.encounterDisplay.numPages}
                </span>

                <button
                    className="encounter-page--next"
                    onClick={props.nextPage}
                >
                    <img
                        src={nextImg}
                        alt="Next"
                    />
                </button>
                <button
                    className="encounter-page--last"
                    onClick={props.lastPage}
                >
                    <img
                        src={lastImg}
                        alt="Last"
                    />
                </button>
            </nav>
        </section>
    )
}

export default EncounterPage

