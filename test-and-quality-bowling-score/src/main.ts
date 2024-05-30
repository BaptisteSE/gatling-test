import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import axios from 'axios';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  
  const baseUrl = 'http://localhost:3000';


  // const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // try {
  //   let response = await axios.post(`${baseUrl}/bowling-score`, frames);
  //   console.log('Bowling Score:', response.data);

  //   response = await axios.post(`${baseUrl}/bowling-score/with-spare`, frames);
  //   console.log('Bowling Score with Spare:', response.data);

  //   response = await axios.post(`${baseUrl}/bowling-score/with-strike`, frames);
  //   console.log('Bowling Score with Strike:', response.data);

  //   response = await axios.post(`${baseUrl}/bowling-score/with-bonus`, frames);
  //   console.log('Bowling Score with Bonus:', response.data);

  // } catch (error) {
  //   console.error('Error making requests:', error);
  // }
}

bootstrap();
