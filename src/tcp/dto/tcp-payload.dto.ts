import { IsOptional, IsString } from "class-validator";

export class TcpPayloadDto{


  @IsString()
  readonly port:string;

  @IsString()
  readonly srcIP:string;

  @IsOptional()
  @IsString({each:true})
  readonly dstIP:string;



}