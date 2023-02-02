import { sqs } from './src/config';
import { QUEUE_URL } from './src/constants';

const deleteSQSqueue = async () => {
  await sqs.deleteQueue({ QueueUrl: QUEUE_URL }).promise();
  
  console.log('queue deleted')
};

deleteSQSqueue()

