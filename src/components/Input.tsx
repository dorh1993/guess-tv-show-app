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
        <div className="container">
            <input
                value={input}
                placeholder="Enter Guess.."
                onChange={event => setInput(event.target.value)}
                className="input">
            </input>
            <button onClick={submit}>Check My Guess</button>
        </div>
    )
}

export default Input
