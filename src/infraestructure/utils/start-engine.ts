import type { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

export async function startEngine(module: any, instance: INestApplication) {
  try {
    if (instance) return instance;
  
    instance = await NestFactory.create(module);
  
    return instance;
  } catch (error) {
    throw error
  }
}
