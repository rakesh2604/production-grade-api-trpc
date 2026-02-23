import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express';
import { generateOpenApiDocument, createOpenApiExpressMiddleware } from 'trpc-to-openapi';
import fs from 'fs/promises'
import { createContext } from './server/context.js';
import { appRouter } from './server/index.js';

const app = express()

app.use(express.json())

const openapiDocument = generateOpenApiDocument(appRouter, {
    baseUrl: 'http://localhost:8000/api',
    title: 'My TODO Server',
    version: '1.0.0',
})

fs.writeFile('./openapi-specification.json', JSON.stringify(openapiDocument))

app.get('/', (req, res) => {
    return res.json({ status: 'Server is up and running' })
})

app.get('/openapi.json', (req, res) => {
    return res.json(openapiDocument)
})

app.use('/api', createOpenApiExpressMiddleware({
    router: appRouter,
    createContext,
} as any))

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    }),
);

app.listen(8000, () => console.log(`Express server is running on PORT 8000`))
