

import { IsOptional,IsString, IsNumber, IsBoolean } from "class-validator";

export class ReceiverDto{

  // @IsNumber()
  // readonly srcIP:number;

  /**
   * port가 존재할 경우 입력합니다. 기본값은 6500 입니다. 
   */
  
  @IsOptional()
  @IsString()
  readonly check_ip:string;


  @IsOptional()
  @IsString()
  readonly is_ncp_services:string;



  @IsOptional()
  @IsString()
  readonly protocol:string;


  @IsOptional()
  readonly is_check_tcp_state:boolean;
 



}
export class ReceiverResDto{

}
