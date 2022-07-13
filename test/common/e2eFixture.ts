import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

function initE2eFixture() {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api/v0');
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  return Object.freeze({
    get req() {
      return request(app.getHttpServer());
    },
  });
}

export { initE2eFixture };
