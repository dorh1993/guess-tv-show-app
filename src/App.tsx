import axios from 'axios'
import { useState, useEffect, useLayoutEffect } from 'react';
import Header from './components/Header'
import './App.css'
import Figure from './components/Figure';
import Word from './components/Word';
import WrongWord from './components/WrongWord';
import { showNotification as show, statistics } from './helpers/helpers';
import Popup from './components/Popup';
import Notification from './components/Notification';
import Input from './components/Input';
import { NotificationType } from './components/Notification'
import Hint from './components/Hint';

interface TvShowData {
  name: string
  overview: string
  id: number
}

const KEY = '9620479b4a7a846580d91a78db97b987'


function App() {
  const [playable, setPlayable] = useState<boolean>(true);
  const [guessedWord, setGuessedWord] = useState<string>('');
  const [wrongWords, setWrongWords] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [displayHint, setDisplayHint] = useState<boolean>(false);
  const [notificationType, setNotificationType] = useState<NotificationType['type']>('statistics');
  const [tvShows, setTvShows] = useState<TvShowData[]>([])
  const [hint, setHint] = useState<string>('');
  const [selectedShowName, setSelectedShowName] = useState<string>('');
  useEffect(() => {
    try {
      axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${KEY}`).then((response: any) => {
        const tvShows = response.data.results
        setTvShows(tvShows)
        const randomNum = Math.floor(Math.random() * tvShows.length)
        setSelectedShowName(tvShows[randomNum].name)
        setHint(tvShows[randomNum].overview)
      })
    } catch (err) {
      console.error(err);
    }
  }, [])

  useEffect(() => {
    if (playable && guessedWord) {
      if (guessedWord === selectedShowName) {
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


  function random() {
    const randomNum = Math.floor(Math.random() * tvShows.length)
    setSelectedShowName(tvShows[randomNum].name)
    setHint(tvShows[randomNum].overview)
  }

  function showStatistics() {
    setNotificationType('statistics')
    show(setShowNotification);
  }

  function showHintText() {
    statistics('hint')
    setDisplayHint(true)
  }

  function playAgain() {
    setPlayable(true);

    // Empty Array
    setGuessedWord('')
    setWrongWords([]);
    setDisplayHint(false)
    
    random()
  }


  return (
    <>
    {
      tvShows && 
      <div>
        <Header />
        <div className="game-container">
          <Figure wrongWords={wrongWords} />
          { selectedShowName && <Word selectedWord={selectedShowName} />}
          <Input setGuessedWord={setGuessedWord} />
          { hint && <Hint hint={hint} showHint={showHintText} displayHint={displayHint}/>}
          <WrongWord wrongWords={wrongWords} />
        </div>
        <Popup guessedWord={guessedWord} wrongWords={wrongWords} selectedWord={selectedShowName} setPlayable={setPlayable} playAgain={playAgain} />
        <Notification showNotification={showNotification} type={notificationType} />
        <button className="button statistics" onClick={showStatistics}>Statistics</button>
      </div>
    }
    </>
  );
}

export default App;
