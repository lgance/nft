

import { IsOptional,IsString, IsNumber, IsBoolean } from "class-validator";

export class SenderDto{

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
  readonly targetPort:number;


  /**
   * 통신이 실패할 경우에 대한 케이스 확인 입니다. 
   * true 일 경우 통신이 안되어야 성공입니다.
   * dst IP 의 Inbound가 안되는걸 확인 하는 부분이며 해당 Agent에서 OutBound로 
   * 트래픽이 나간 부분은 TCP 3 Hand Shake 를 통해 확인 합니다.
   * A -> OutBound 성공   Inbound 실패 -> B 일 경우 
   * A는 dstIP:Port로 SYN_SENT  
   * && 
   * B는 srcIP:Port로 SYN_RECV 상태여야 성공 
   */
  @IsOptional()
  @IsBoolean()
  readonly isNegative :boolean;



}
