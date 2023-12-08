import React from 'react'
import type { Quiz } from '@/types/models/quiz'

function QuizDetails({ quiz, handleStartBtn }: { quiz: Quiz, handleStartBtn: () => void }) {
  return (
    <div>
      <div>
        {quiz.title}
      </div>
      <div>
        description:
        {quiz.descr}
      </div>
      <div>
        Starts at:
        {quiz.opensAt}
      </div>
      <div>
        Finishes at:
        {quiz.closesAt}
      </div>
      {
        quiz.questionIds.length === 0
        && <h2>no questions in quiz</h2>
      }
      <button onClick={handleStartBtn} disabled={quiz.questionIds.length === 0}>
        Start Quiz
      </button>
    </div>
  )
}

export default QuizDetails
