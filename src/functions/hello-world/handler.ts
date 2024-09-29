import type { INestApplication } from '@nestjs/common';
import { HelloWorldModule } from './hello-world.module';
import { startEngine } from '@infra/utils/start-engine';
import { IHelloWorldUseCase } from '@domain/use-cases/hello-world/hello-world.use-case';
import type { APIGatewayProxyHandlerV2 } from 'aws-lambda';

let instance: INestApplication;

export const welcome: APIGatewayProxyHandlerV2 = async () => {
  try {
    instance = await startEngine(HelloWorldModule, instance);
  
    const useCase = instance.get<IHelloWorldUseCase>(IHelloWorldUseCase);
  
    await useCase.execute();
  
    return {
      statusCode: 200,
      body: 'Hello world from nestjs'
    }
  } catch (error) {
    console.error('Erro inesperado', error)
    return {
      statusCode: 500,
      body: `Erro inesperado: ${error}`
    }
  }
}
