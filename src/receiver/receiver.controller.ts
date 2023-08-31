import { Controller, Get, Query } from '@nestjs/common';
import { ReceiverDto } from './dto/receiver.dto';
import { ReceiverService } from'./receiver.service';


@Controller('receiver')
export class ReceiverController {

  constructor(private readonly senderService:ReceiverService){}



  @Get()
  recvTraffic(@Query() receiverDto:ReceiverDto){
    return this.senderService.recvTraffic(receiverDto);
  }



}
