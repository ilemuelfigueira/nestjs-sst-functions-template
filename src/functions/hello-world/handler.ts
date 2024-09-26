import type { INestApplication } from '@nestjs/common';
import { HelloWorldModule } from './hello-world.module';
import { startEngine } from '@infra/utils/start-engine';
import { IHelloWorldUseCase } from '@domain/use-cases/hello-world/hello-world.use-case';

let instance: INestApplication;

export async function handler() {
  instance = await startEngine(HelloWorldModule, instance);

  const useCase = instance.get<IHelloWorldUseCase>(IHelloWorldUseCase);

  await useCase.execute();
}

handler();
