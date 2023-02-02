import { sqs } from './src/config';
import { SQS_QUEUE_NAME } from './src/constants';

const createSQSqueue = async () => {
  await sqs.createQueue({ QueueName: SQS_QUEUE_NAME }).promise();
  
  console.log('queue created')
};

createSQSqueue()

