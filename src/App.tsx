import { useState, useEffect } from 'react';
import Header from './components/Header'
import './App.css'
import Figure from './components/Figure';
import Word from './components/Word';
import WrongWord from './components/WrongWord';
import { showNotification as show, statistics } from './helpers/helpers';
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
  const [notificationType, setNotificationType] = useState<string>('');
  
  useEffect(() => {
    if (playable && guessedWord) {
      if (guessedWord === selectedWord) {
          statistics('win')
      } else {
        if (!wrongWords.includes(guessedWord)) {
          statistics('lost')
          setWrongWords(currentWords => [...currentWords, guessedWord]);
        } else {
          setNotificationType('repeated')
          show(setShowNotification);
        }
      }
    }
  }, [guessedWord, playable])


  function showStatistics(){
    setNotificationType('statistics')
    show(setShowNotification);
  }

  function showHint(){
    statistics('hint')
  }


  function playAgain() {
    setPlayable(true);

    // Empty Array
    setGuessedWord('')
    setWrongWords([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }


  return (
    <>
      <Header />
      <button className="button statistics" onClick={showStatistics}>Statistics</button>
      <button className="button hint" onClick={showHint}>Hint</button>
      <div className="game-container">
        <Figure wrongWords={wrongWords} />
        <Input setGuessedWord={setGuessedWord} />
        <Word selectedWord={selectedWord} />
        <WrongWord wrongWords={wrongWords} />
      </div>
      <Popup guessedWord={guessedWord} wrongWords={wrongWords} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNotification={showNotification} type={notificationType}/>
    </>
  );
}

export default App;
