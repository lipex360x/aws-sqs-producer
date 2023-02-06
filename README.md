## LocalStack
* Docker LocalStack Extensions

* Create SQS QUEUE
> env SQS_QUEUE_NAME=queueName ts-node sqs-create-queue.ts

* Create SQS Message
> env SQS_QUEUE_NAME=queueName ts-node sqs-create-message.ts

* Delete SQS QUEUE
> env SQS_QUEUE_NAME=queueName ts-node sqs-delete-queue.ts

* Delete SQS Message
> env SQS_QUEUE_NAME=queueName ts-node sqs-delete-message.ts

* Receive SQS Message
> env SQS_QUEUE_NAME=queueName ts-node sqs-receive-message.ts