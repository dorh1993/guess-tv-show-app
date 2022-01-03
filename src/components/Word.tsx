import React from 'react'

interface Props {
    selectedWord: string
}

const Word = ({ selectedWord }: Props) => {

    function randomBoolean() {
        return Math.random() < 0.5;
    }

    return (
        <div className="word">
            {selectedWord.split('').map((letter, i) => {
                return (
                    <span className="letter" key={i}>
                        {randomBoolean() ? letter : ''}
                    </span>
                )
            })
            }
        </div>
    )
}

export default Word
