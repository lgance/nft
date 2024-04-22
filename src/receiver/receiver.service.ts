import { Injectable } from '@nestjs/common';

import { ReceiverDto ,ReceiverResDto } from './dto/receiver.dto';

import { agentStatus } from 'src/utils';
@Injectable()
export class ReceiverService {



  recvTraffic(receiverDto:ReceiverDto):Promise<ReceiverResDto>{
    return new Promise(async(resolve,reject)=>{
      try {

          let { 
            
          }  = receiverDto;

        console.warn('리시브 DTO');
        console.warn(receiverDto);

        let receiveAgentStatus = await agentStatus();

        resolve({
          receiveAgentStatus
        });
      } catch (error) {
          reject({
            error:error,
            
          })        
      }
    })
  }




}
