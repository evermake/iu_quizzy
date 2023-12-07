import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {User} from "~/types/models/user";
import {Quiz} from "~/types/models/quiz";
import {BASE_URL} from "~/constants";

export const questionService = createApi({
    reducerPath: 'questionService',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: build => ({
        getQuestions: build.query<Quiz[], void>({
            query: () => '/questions',
        }),
        getQuestionById: build.query<Quiz, string>({
            query: (id) => `/questions/${id}`,
        }),
    }),
})

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionService
