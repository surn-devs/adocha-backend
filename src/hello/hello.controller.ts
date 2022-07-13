import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HelloService } from './hello.service';

@ApiTags('hello')
@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello() {
    return this.helloService.getHello();
  }
}
