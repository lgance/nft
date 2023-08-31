

import { IsOptional,IsString, IsNumber, IsBoolean } from "class-validator";

export class SenderDto{

  @IsNumber()
  readonly srcIP:number;

  @IsNumber()
  readonly dstIP:number;


  /**
   * port가 존재할 경우 
   */
  @IsOptional()
  @IsNumber()
  readonly targetPort:number;


  /**
   * true 일 경우 통신이 안되어야 성공입니다.
   */
  @IsOptional()
  @IsBoolean()
  readonly isNegative :boolean;



}