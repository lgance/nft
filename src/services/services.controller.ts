import { Controller, Get, Query } from '@nestjs/common';

import { ObjectStorageDto,SystemSecurityCheckerDto } from './dto/services.dto';
import { ServicesService } from './services.service'

@Controller('services')
export class ServicesController {


  constructor(private readonly services:ServicesService){}

  
  @Get('/')
  servicesIndex(){
    return 'Services Index Router';

  }

  @Get('/object_storage')
  downloadServices(@Query() obsDto:ObjectStorageDto ){
    return this.services.downloadServices(obsDto);
  }

  @Get('/ssc')
  systemSecurityChecker(@Query() sscDto:SystemSecurityCheckerDto){
    return this.services.systemSecurityChecker(sscDto);
  }


}
