import { IHelloWorldUseCase } from '@domain/use-cases/hello-world/hello-world.use-case';
import { HelloWorlUseCase } from '@infra/use-cases/hello-world/hello-world.use-case';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({})],
  providers: [
    Logger,
    {
      provide: IHelloWorldUseCase,
      useClass: HelloWorlUseCase,
    },
  ],
})
export class HelloWorldModule {}
