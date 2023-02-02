import { sqs } from './src/config';
import { QUEUE_URL } from './src/constants';

const deleteSQSMessage = () => {
  const receiptHandle = ''

  sqs.deleteMessage({ QueueUrl: QUEUE_URL, ReceiptHandle: receiptHandle }).promise()
  
  console.log('message deleted')
}

deleteSQSMessage()
