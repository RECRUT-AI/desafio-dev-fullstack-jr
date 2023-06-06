import app from './controller/app'
import express from 'express'
import InitDatabase from './database/InitDatabase'

import { pingRouter } from './router/ping'
import { tutorRouter } from './router/TutorRouter'

InitDatabase()


app.use("/ping", pingRouter)
app.use("/tutor", tutorRouter)

