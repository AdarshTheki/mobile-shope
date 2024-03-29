import { Client, Databases, Account,  } from 'appwrite';

const PROJECT_ID = '65293845b0e39c4fac26';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject(PROJECT_ID); // Your project ID

export const databases = new Databases(client);
export const account = new Account(client);
