import { sqs } from './src/config';
import { SQS_QUEUE_URL } from './src/constants';

const deleteSQSMessage = () => {
  const receiptHandle = ''

  sqs.deleteMessage({ QueueUrl: SQS_QUEUE_URL, ReceiptHandle: receiptHandle }).promise()
  
  console.log('message deleted')
}

deleteSQSMessage()
