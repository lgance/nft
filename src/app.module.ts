import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SenderModule } from './sender/sender.module';
import { ReceiverModule } from './receiver/receiver.module';
import { ServicesModule } from './services/services.module';
import { join } from 'path';

import { ServeStaticModule } from '@nestjs/serve-static';


@Module({
  imports: [SenderModule, ReceiverModule, ServicesModule,
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,'..','static'),
      serveRoot:"/"
    })],
  controllers: [ AppController],
  providers: [ ],
})
export class AppModule {}
