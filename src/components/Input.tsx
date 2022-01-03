import React, { useState } from 'react'

interface Props {
    setGuessedWord: (input: string) => void
}

const Input = ({ setGuessedWord }: Props) => {
    const [input, setInput] = useState('')

    function submit() {
        setGuessedWord(input)
        setInput('')
    }

    return (
        <div className="input-container">
            <input
                value={input}
                type='text'
                placeholder="Enter Guess.."
                onChange={event => setInput(event.target.value)}
                className="input">
            </input>
            <button className="button" onClick={submit}>Check My Guess</button>
        </div>
    )
}

export default Input
