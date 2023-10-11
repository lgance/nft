import { Controller, Get, Query } from '@nestjs/common';
import { SenderService } from './sender.service';
import { 
  SenderDto
 } from './dto/sender.dto';

@Controller('sender')
export class SenderController {

  constructor(private readonly senderService:SenderService){}
  /**
   * 설정된 dstIP로 트래픽을 보냅니다. 
   * @param sendDto 
   */

  @Get()
  async sendTraffic(@Query() sendDto:SenderDto){
    return await this.senderService.sendTraffic(sendDto);
  }

}
