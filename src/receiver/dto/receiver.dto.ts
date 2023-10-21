

import { IsOptional,IsString, IsNumber, IsBoolean } from "class-validator";

export class ReceiverDto{

  // @IsNumber()
  // readonly srcIP:number;



  /**
   * port가 존재할 경우 입력합니다. 기본값은 6500 입니다. 
   */
  @IsOptional()
  @IsNumber()
  readonly checkIP:number;


}
export class ReceiverResDto{

}