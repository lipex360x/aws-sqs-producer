import { SQS } from 'aws-sdk';

void (async () => {
  const AWS_URL = 'http://localhost:4566'
  const SQS_QUEUE_NAME = 'payables_duplicates'
  
  const sqs = new SQS({ endpoint: AWS_URL, region: 'us-east-1' });
  await sqs.createQueue({ QueueName: SQS_QUEUE_NAME }).promise();

  const message = JSON.stringify({
    id: 1,
    body: {
      message: 'hello SQS'
    }
  })

  const QUEUE_URL = `${AWS_URL}/${SQS_QUEUE_NAME}`
  await sqs.sendMessage({
    QueueUrl: QUEUE_URL,
    MessageBody: message,
  }).promise()

  console.log('message created')
})();

