import { sqs } from './src/config';
import { SQS_QUEUE_URL } from './src/constants';

const createSQSmessage = async () => {
  // await sqs.createQueue({ QueueName: SQS_QUEUE_NAME }).promise();

  const message = JSON.stringify({
    body: {
      message: 'hello SQS'
    }
  })
  
  await sqs.sendMessage({
    QueueUrl: SQS_QUEUE_URL,
    MessageBody: message,
  }).promise()

  console.log('message created')
};

createSQSmessage()
