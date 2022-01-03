import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import './App.css'
import Figure from './components/Figure';
import Word from './components/Word';
import WrongWord from './components/WrongWord';
import { fromEvent } from 'rxjs'
import { filter } from 'rxjs/operators'
import { showNotification as show, checkWin } from './helpers/helpers';
import Popup from './components/Popup';
import Notification from './components/Notification';
import Input from './components/Input';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {
  const [playable, setPlayable] = useState<boolean>(true);
  const [guessedWord, setGuessedWord] = useState<string>('');
  const [wrongWords, setWrongWords] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState<boolean>(false);


useEffect(() => {
  if(playable && guessedWord) {
    if(guessedWord === selectedWord) {
      console.log('won');
      
    } else {
      console.log('lost');
      if(!wrongWords.includes(guessedWord)) {
        setWrongWords(currentWords => [...currentWords, guessedWord]);
      } else {
        show(setShowNotification);
      }
    }
  }
}, [guessedWord, playable])


  // useEffect(() => {
  //   if (playable) {
  //     const subscription =
  //       fromEvent<KeyboardEvent>(document, 'keydown')
  //         .pipe(filter(e => e.keyCode >= 65 && e.keyCode <= 90)) // all English Letters
  //         .subscribe((e) => {
  //           const letter = e.key.toLowerCase();
  //           if (selectedWord.includes(letter)) {
  //             if (!correctLetters.includes(letter)) {
  //               setCorrectLetters(currentLetters => [...currentLetters, letter]);
  //             } else {
  //               show(setShowNotification);
  //             }
  //           } else {
  //             if (!wrongLetters.includes(letter)) {
  //               setWrongLetters(currentLetters => [...currentLetters, letter]);
  //             } else {
  //               show(setShowNotification);
  //             }
  //           }
  //         })

  //     return () => subscription.unsubscribe()
  //   }

  // }, [correctLetters, wrongLetters, playable])



  function playAgain() {
    setPlayable(true);

    // Empty Array
    setWrongWords([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  
  return (
    <>
     <Header />
      <div className="game-container">
        <Input setGuessedWord={setGuessedWord}/>
        <Figure wrongWords={wrongWords} />
        <WrongWord wrongWords={wrongWords} />
        <Word selectedWord={selectedWord}/>
      </div>
      <Popup guessedWord={guessedWord} wrongWords={wrongWords} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
