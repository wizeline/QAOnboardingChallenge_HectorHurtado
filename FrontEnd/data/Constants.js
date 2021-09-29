import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD
}

export const TASK_NAMES = [
    'T00',
]