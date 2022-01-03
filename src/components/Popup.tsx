import React, { useEffect } from 'react';
import { checkWin, statistics } from '../helpers/helpers';

interface Props {
    guessedWord: string
    wrongWords: string[]
    selectedWord: string
    playAgain: () => void
    setPlayable: (playAgain: boolean) => void
}

const Popup = ({ guessedWord, wrongWords, selectedWord, setPlayable, playAgain }: Props) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    if (checkWin(guessedWord, wrongWords, selectedWord) === 'win') {
        finalMessage = 'Congratulations! You won! 😃';
        playable = false;
    } else if (checkWin(guessedWord, wrongWords, selectedWord) === 'lose') {
        finalMessage = 'Unfortunately you lost. 😕';
        finalMessageRevealWord = `the word was: ${selectedWord}`;
        playable = false;
    }

    useEffect(() => {
        setPlayable(playable);
    });

    return (
        <div className="popup-container" style={finalMessage !== '' ? { display: 'flex' } : {}}>
            <div className="popup">
                <>
                    <h2>{finalMessage}</h2>
                    <h3>{finalMessageRevealWord}</h3>
                    <button onClick={playAgain}>Play Again</button>
                </> 
            </div>
        </div>
    )
}

export default Popup