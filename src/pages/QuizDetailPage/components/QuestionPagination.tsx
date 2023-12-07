import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import { updatePaginationId, updateQuestionId } from '@/store/reducer/quizSlice'

function QuestionPagination({ quiz }) {
  const dispatch = useAppDispatch()
  const [_, setSearchParams] = useSearchParams()

  return (
    <div>
      {quiz.questionIds.map((questionId, id) => {
        return (
          <button
            key={questionId}
            onClick={() => {
              dispatch(updatePaginationId(id))
              dispatch(updateQuestionId(questionId))
              setSearchParams({ question: id + 1 })
            }}
          >
            {id + 1}
          </button>
        )
      },
      )}

    </div>
  )
}

export default QuestionPagination
