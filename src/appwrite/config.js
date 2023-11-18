import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '655436d63a9eae53dc46';
export const DATABASE_ID = '65575d21762406508353';
export const COLLECTION_ID = '65575d48e45f6e2282d0';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject(PROJECT_ID); // Your project ID

export const databases = new Databases(client);
export const account = new Account(client);
