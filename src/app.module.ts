import { Module } from '@nestjs/common';
import { TcpModule } from './tcp/tcp.module';
import { AppController } from './app.controller';


@Module({
  imports: [TcpModule],
  controllers: [ AppController],
  providers: [ ],
})
export class AppModule {}
