import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello() {
    return {
      message: 'Hello world!',
    };
  }
}
