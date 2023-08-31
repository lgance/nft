import { Injectable } from '@nestjs/common';
import { Tcp } from './entities/tcp.entity';

@Injectable()
export class TcpService {

  private test:Tcp[] = [];

}
