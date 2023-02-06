import { sqs } from './src/config';
import { SQS_QUEUE_URL } from './src/constants';

const receiveSQSmessage = async () => {
  const data = await sqs.receiveMessage({ 
    QueueUrl: SQS_QUEUE_URL 
  }).promise()

  if(data.Messages?.length) return

  const { Body, ReceiptHandle } = data.Messages![0]

  const messageReceiptHandle = ReceiptHandle!

  const messageBody = JSON.parse(Body!).body

  console.log('Message Body', messageBody)

  await sqs.deleteMessage({ 
    QueueUrl: SQS_QUEUE_URL, 
    ReceiptHandle: messageReceiptHandle 
  }).promise()

};

receiveSQSmessage()

