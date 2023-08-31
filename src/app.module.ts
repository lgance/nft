import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SenderModule } from './sender/sender.module';
import { ReceiverModule } from './receiver/receiver.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [SenderModule, ReceiverModule, ServicesModule],
  controllers: [ AppController],
  providers: [ ],
})
export class AppModule {}
