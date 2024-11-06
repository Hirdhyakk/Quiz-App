import { useState } from 'react';
import './App.css';
import User from './components/User';
import Quiz from './components/Quiz';
import Result from './components/Result';
import questions from './assets/questions.json'

function App() {
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(null);
  const [responseAnswers, setResponseAnswers] = useState();

  console.log(user, score);

  return (
    <>
      {!user ? <User setUser={setUser} /> :
        !score ? <Quiz setScore={setScore} questions={questions} setResponseAnswers={setResponseAnswers} /> : <Result user={user} score={score} questions={questions} responseAnswers={responseAnswers} />}

      {/* <Quiz setScore={setScore} questions={questions} /> */}

    </>
  );
}

export default App;
