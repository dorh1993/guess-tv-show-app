import React from 'react'

interface Props {
    wrongWords: string[]
}

const WrongWord = ({wrongWords}: Props) => {
    
    return (
        <div className="wrong-word-container">
            <div>
                {wrongWords.length > 0 && <p>Wrong</p>}
                {wrongWords
                    .map((word, i) => <span key={i}> {word} </span>)
                    .reduce((prev: any, curr) => prev === null ? [curr] : [prev, ',', curr], null)
                }
            </div>
        </div>
    )
}

export default WrongWord
