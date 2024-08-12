import express from 'express'
import cors from 'cors'
import paymentRoutes from './src/routes/payments.routes.js'
import { PORT } from './src/config.js'
import morgan from 'morgan'
const app = express()
app.use(cors({
    origin:'*'
}))
app.use(paymentRoutes)
app.use(morgan('dev'))
app.listen(PORT, () => {
    console.log("server on port: ", PORT);
})