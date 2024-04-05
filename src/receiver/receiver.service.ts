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

          let _result = false
          let receiveStatus = await agentStatus();


        resolve({
          result:_result,
          status:receiveStatus
        });
      } catch (error) {
          reject({
            error:error,
            
          })        
      }
    })
  }




}
