import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Query, Req, Res } from '@nestjs/common';
import { TcpService } from './tcp.service';
import { TcpPayloadDto } from './dto/tcp-payload.dto';

@Controller('tcp')
export class TcpController {


  constructor(readonly tcpService:TcpService){}


  @Get()
  tcpTest(@Query() getDtoTest:TcpPayloadDto){
    
    console.warn(getDtoTest);
    console.warn('ppaptcp test');
    return 'this tcp Test man ';
  }
  @Get('/error')
  errorTest(){

    console.warn('test');
    throw new NotFoundException('Error Test Man ');
  }



  @Get('/:id')
  tcpgetTest(@Param("id") id:number,@Query('id') testid:string,@Query('pw') testpw:string){

    console.warn(id);
    console.log(typeof id);
    console.warn(testid);
    console.warn(testpw);
    return `this teste value ${id}`
  }

  @Post()
  tcptestBody(@Body() tcpData){
    console.log(tcpData);

    return 'test';
  }

  @Patch('/:id')
  tcptestPatchBody(@Param('id') tcpPatchData:string, @Body() tcpData){
    console.log(tcpData);

    return 'test';
  }



  @Get('ppap')
  testMan(@Req() req, @Res() res){
    
  }
 

}
