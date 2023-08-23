import { AppService } from './app.service';
import { TcpService } from './tcp/tcp.service';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TcpController } from './tcp/tcp.controller';
import { TcpModule } from './tcp/tcp.module';
import { SenderModule } from './sender/sender.module';
import { ReceiverModule } from './receiver/receiver.module';
import { IcmpModule } from './icmp/icmp.module';
import { FileTrackerModule } from './file-tracker/file-tracker.module';
import { UdpModule } from './udp/udp.module';


@Module({
  imports: [TcpModule, SenderModule, ReceiverModule, IcmpModule, FileTrackerModule, UdpModule],
  controllers: [AppController, TcpController],
  providers: [AppService, TcpService],
})
export class AppModule {}
