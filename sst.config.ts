/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "nestjs-functions-template",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const func = new sst.aws.Function("MyFunction", {
      nodejs: {
        install: [
          "@nestjs/microservices",
          "@nestjs/websockets",
          "nats",
          "cache-manager",
          "class-transformer",
          "class-validator",
        ]
      },
      environment: {
        TESTE: process.env.TESTE ?? 'not-working'
      },
      handler: "src/functions/hello-world/handler.welcome",
      url: true,
      memory: '512 MB',
      timeout: '10 seconds'
    })

    return {
      url: func.url
    }
  },
});
