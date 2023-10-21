import { Injectable } from '@nestjs/common';
import { SenderDto,SenderResDto } from './dto/sender.dto';
import axios from 'axios';

@Injectable()
export class SenderService {

    sendTraffic(sendDto:SenderDto):Promise<SenderResDto>{
        return new Promise(async(resolve,reject)=>{
            try {
              let { dstIP,targetPort,isNegative,assertIP } = sendDto;

              let usingPort = process.env.SERVER_AGENT_BASIC_PORT;
              if(typeof targetPort!=='undefined' && targetPort && targetPort!=="6500"){
                usingPort = targetPort
              }
              let sendRequestURL =  `http://${dstIP}:${usingPort}/recv?assertIP=${assertIP}`;
                
              let sendResponse = await axios.get(sendRequestURL,{timeout:5000});

              console.warn(sendResponse.data);
              

              let receiveAgent = {

              }
              
              resolve({
                mainResult:"pass",
                sendurl:sendRequestURL,
                agentStatus:{
                  senderAgent:{},
                  receiveAgent:{}
                }
              })

            } catch (error) {
                reject({  
                mainResult:"pass",
                agentStatus:{
                    senderAgent:{
                        // "tcp":[{
                        //     "protocol":"",
                        //     "port":"6500",
                        //     "status":"",
                        //     "status_code":"",
                        //     "last_access":"",
                        //     "test_type":"SEND",
                        //     "src_ip":"",
                        //     "dst_ip":""
                        // }]
                    },
                    receiverAgent:{
                       
                    }
                }})
            }

        })
    }
}
