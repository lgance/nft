import { Module } from '@nestjs/common';
import { TcpModule } from './tcp/tcp.module';
import { AppController } from './app.controller';
import { SenderModule } from './sender/sender.module';
import { ReceiverModule } from './receiver/receiver.module';


@Module({
  imports: [TcpModule, SenderModule, ReceiverModule],
  controllers: [ AppController],
  providers: [ ],
})
export class AppModule {}
