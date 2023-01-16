import React, {useState} from 'react';
import './App.css';

function App() {


 //Properties

 const[showFinalResults, setFinalResults] = useState(false);
 const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0)


const questions = [
  {
      question: 'Who won MVP (Most Valuable Player)in the 2020 NBA Finals?',
      answers: [
          {id:0, Text: 'Lebron James', correct: true },
          {id:1, Text: 'Anthony Davis', correct: false },
          {id:2, Text: 'Jimmy Butler', correct: false },
          {id:3, Text: 'Jayson Tatum', correct: false }

      ]
  },
  {
      question: 'What two teams faced off in the NBA Finals in 2016?',
      answers: [
          {id:0, Text: 'OKC Thunder Vs Toronto Raptors', correct: false },
          {id:1, Text: 'San Antonio Spurs Vs Miami Heat', correct: false },
          {id:2, Text: 'Golden State Warriors Vs Cleveland Cavilers', correct: true },
          {id:3, Text: 'LA Lakers Vs Boston Celtics', correct: false },
      ]
  },
  {
      question: 'Who won MVP in the 2016/2017 regular season?',
      answers: [
          {id:0, Text: 'Kevin Durant', correct: false },
          {id:1, Text: 'Stephen Curry', correct: false },
          {id:2, Text: 'Russell Westbrook', correct: true },
          {id:3, Text: 'Tim Duncan', correct: false },
      ]
  },
  {
      question: 'Why was the NBA Season Supended in 2020?',
      answers: [
          {id:0, Text: 'Summer break', correct: false },
          {id:1, Text: 'Tornado', correct: false },
          {id:2, Text: 'Global Pandemic', correct: true },
          {id:3, Text: 'Too Many Injuries', correct: false },
      ]
  },
  {
      question: 'What NBA player in history has 0 loses in the Finals?',
      answers: [
          {id:0, Text: 'Lebron James', correct: false },
          {id:1, Text: 'Kobe Bryant', correct: false },
          {id:2, Text: 'Bill Russell', correct: false },
          {id:3, Text: 'Michael Jordan', correct: true },
      ]
  },
];


// Helper Functions
const textClicked = (correct) => {
  if (correct) {
    setScore(score + 1);
  }


if (currentQuestion + 1 < questions.length) {
  setCurrentQuestion(currentQuestion + 1);
} else {
  setFinalResults(true);
} 
}

const restartGame = () => {
  setScore(0)
  setCurrentQuestion(0)
  setFinalResults(false);
}



  return (
    <div className='App'>
      <h1>NBA Quiz Game</h1>


    {/*2. Current Score */}
      <h2>Current Score: {score}</h2>


      {showFinalResults ? (
        /* 4. Final Results*/
        <div className="final-results">
        <h1>Final Results</h1>
        <h2> {score} out of {questions.length} Correct - ({(score/questions.length) * 100}%)</h2>
          <button onClick={() => restartGame()}>Restart Game</button>
      </div>
      ) : (
      
      /*3. Question Card */
      <div className='question-card'>
        <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
        <h3 className='question-text'>{questions[currentQuestion].question}</h3>

        {/* List of possible answers  */}
        <ul>
            {questions[currentQuestion].answers.map((answer) => {
              return (
                <li
                  key={answer.id}
                  onClick={() => textClicked(answer.correct)}
                >
                  {answer.Text}
                </li>
              );
            })}
          </ul>
      </div>
      )}
 </div>
  );
}

export default App;
