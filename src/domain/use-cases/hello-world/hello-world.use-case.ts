export interface IHelloWorldUseCase {
  execute(): Promise<void>;
}

export const IHelloWorldUseCase = Symbol('IHelloWorldUseCase');
