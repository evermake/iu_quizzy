import React from 'react'
import {Button_} from './Button.styled';
import {Text} from '@mantine/core';
function Results(
  { questionIds, userAnswers, handleResetQuizBtn }: {
    questionIds: number[]
    userAnswers: { answer: string, isCorrect: boolean }
    handleResetQuizBtn: () => void
  },
) {
  const emptyArr = Array.from({ length: questionIds.length }, () => 'No answer')
  const keys = Object.keys(userAnswers)

  let posCounter = 0

  const results = emptyArr.map((answer, id) => {
    if (keys.includes(String(id)) && userAnswers[id]) {
      const { answer, isCorrect } = userAnswers[id]
      if (isCorrect) {
        posCounter++
      }
      return `${answer} ${isCorrect ? 'correct' : 'not correct'}`
    }
    return `${emptyArr[id]} ` + `not correct`
  })

  return (
    <div>
      <h2>Results</h2>
      <div>
      {results.map((res, id) => (<div>#{id + 1}:{res}</div>))}
      <Text c='green'>
      {Math.floor((posCounter / questionIds.length) * 100)} % of correct answers </Text>
      </div>
      <Button_ onClick={() => handleResetQuizBtn()}>Reset quiz</Button_>
    </div>
  )
}

export default Results
