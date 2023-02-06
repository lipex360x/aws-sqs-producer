export const AWS_URL = 'http://localhost:4566'
export const AWS_REGION = 'us-east-1'

export const { SQS_QUEUE_NAME } = process.env

export const SQS_QUEUE_URL = `${AWS_URL}/${SQS_QUEUE_NAME}`
