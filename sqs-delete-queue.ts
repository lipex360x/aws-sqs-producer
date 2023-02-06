import { sqs } from './src/config';
import { SQS_QUEUE_URL } from './src/constants';

const deleteSQSqueue = async () => {
  await sqs.deleteQueue({ 
    QueueUrl: SQS_QUEUE_URL 
  }).promise();
  
  console.log('queue deleted')
};

deleteSQSqueue()
