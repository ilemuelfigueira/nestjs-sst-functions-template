export interface IHelloWorldUseCase {
  execute(): Promise<string>;
}

export const IHelloWorldUseCase = Symbol('IHelloWorldUseCase');
