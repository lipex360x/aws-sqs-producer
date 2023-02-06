import { sqs } from './src/config';
import { SQS_QUEUE_NAME } from './src/constants';

const createSQSqueue = async () => { 
  await sqs.createQueue({ QueueName: SQS_QUEUE_NAME!, Attributes: { 
    VisibilityTimeout: "1",
    maxReceiveCount: "1"
  } 
}).promise();

  console.log(`queue ${SQS_QUEUE_NAME} created`)
};

createSQSqueue()

