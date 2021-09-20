import { useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const initialPlayer = {
  id: 0,
  name: '',
  quantity: '',
  answers: [],
};

const initialScore = { right: 0, wrong: 0, score: 0 };

const TriviaProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [playerData, setPlayerData] = useState(initialPlayer);
  const [scoreboard, setScore] = useState(initialScore);

  const { answers } = playerData;

  // Update current player in storage
  useEffect(() => {
    const gameHistory = JSON.parse(localStorage.getItem('gameHistory'));
    let player;

    if (gameHistory) {
      player = gameHistory[gameHistory.length - 1];
      const playerIndex = gameHistory.findIndex((item) => item === player);
      player = { ...player, answers, scoreboard };
      gameHistory[playerIndex] = player;

      localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
    }
  }, [answers, scoreboard]);

  return (
    <GlobalContext.Provider
      value={{
        questions,
        setQuestions,
        playerData,
        setPlayerData,
        scoreboard,
        setScore,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default TriviaProvider;
