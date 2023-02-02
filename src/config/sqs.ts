import { AWS_REGION, AWS_URL } from "../constants";
import { SQS } from 'aws-sdk';

export const sqs = new SQS({ endpoint: AWS_URL, region: AWS_REGION });