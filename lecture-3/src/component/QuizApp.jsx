import './QuizApp.css'
import {questions} from "../utils/questions.js";
import {useEffect, useState} from "react";

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleAnswerClick = (answer) => {
    if (questions[currentQuestionIndex] && answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score => score + 1);
    }
    if (currentQuestionIndex !== questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex => currentQuestionIndex + 1);
    }
    if (currentQuestionIndex === questions.length - 1) {
      setShowAlert(true);
    }
  }

  useEffect(() => {
    if (showAlert) {
      alert(`Quiz successfully finished! You get ${score} points!`);
    }
  }, [showAlert, score])

  return (
    <>
      <div> Total score: {score}</div>
      {!showAlert && (
        <div className="question_card">
          <h4> Question {currentQuestionIndex + 1} / {questions.length}</h4>
          <div>{questions[currentQuestionIndex].question}</div>
          <div>
            {questions[currentQuestionIndex].options.map((option, oIndex) => (
              <button onClick={() => handleAnswerClick(option)} key={oIndex}>{option}</button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default QuizApp
