import type { IHelloWorldUseCase } from '@domain/use-cases/hello-world/hello-world.use-case';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HelloWorlUseCase implements IHelloWorldUseCase {
  private readonly envTest: string;
  constructor(
    @Inject(ConfigService)
    private readonly configService: ConfigService,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(HelloWorlUseCase.name);
    this.envTest = this.configService.getOrThrow<string>('TESTE');
  }
  async execute(): Promise<void> {
    this.logger.verbose(`Hello world env:TESTE:${this.envTest}`);
  }
}
