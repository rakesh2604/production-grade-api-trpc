import { z } from 'zod'
import { router, publicProcedure } from '../../trpc.js'
import { getAllTodosOutputModel, todoModel } from './models.js'
import type { Todo } from './models.js'

const TODOS: Todo[] = [{ id: '1', isCompleted: false, title: 'Record Video', description: 'I need to record a video on prod grade apis' }]

export const todoRouter = router({
    createTodo: publicProcedure
        .meta({
            openapi: { method: 'POST', path: '/create-todo', tags: ['Todo'], description: 'Creates a new todo' }
        })
        .input(z.object({ title: z.string() }))
        .output(z.object({ todo: todoModel })).mutation(({ input }) => {
            TODOS.push({ id: '123', isCompleted: false, title: input.title })
            return {
                todo: { id: '123', isCompleted: false, title: input.title }
            }
        }),
    getAllTodos: publicProcedure
        .meta({
            openapi: {
                method: 'GET',
                path: '/todos',
                tags: ['Todo'],
                description: 'Returns all the todos',
            }
        })
        .input(z.void())
        .output(getAllTodosOutputModel)
        .query(() => {
            return {
                todos: TODOS
            }
        })
})
