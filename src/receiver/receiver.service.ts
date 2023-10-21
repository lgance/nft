import { Injectable } from '@nestjs/common';

import { ReceiverDto ,ReceiverResDto } from './dto/receiver.dto';


@Injectable()
export class ReceiverService {



  recvTraffic(receiverDto:ReceiverDto):Promise<ReceiverResDto>{
    return new Promise(async(resolve,reject)=>{
      try {
        
        resolve(true);
      } catch (error) {
          reject({
            error:error,
            
          })        
      }
    })
  }




}
