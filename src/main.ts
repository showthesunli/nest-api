import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局的验证器管道
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // 如果有不在白名单的属性，就抛出异常
      transform: true, // 将传入的数据转换为 DTO 类型
    }),
  );
  await app.listen(3000);
}
bootstrap();
