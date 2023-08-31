import { Controller, Get, Query } from '@nestjs/common';

import { SenderDto } from './dto/sender.dto';

@Controller('sender')
export class SenderController {


  @Get()
  sendTraffic(@Query() sendDto:SenderDto){
    

  }




}
