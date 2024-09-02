import OpenAI from 'openai';
import { OPNEAI_KEY } from './constant';

const client = new OpenAI({
  apiKey: OPNEAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default client;