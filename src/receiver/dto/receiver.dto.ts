

import { IsOptional,IsString, IsNumber, IsBoolean } from "class-validator";

export class ReceiverDto{

  // @IsNumber()
  // readonly srcIP:number;

  /**
   * 트래픽을 보낼 대상의 IP 를 입력 합니다.
   */
  @IsNumber()
  readonly dstIP:number;


  /**
   * port가 존재할 경우 입력합니다. 기본값은 6500 입니다. 
   */
  @IsOptional()
  @IsNumber()
  readonly checkIP:number;




}
