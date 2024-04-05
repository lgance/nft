import { Injectable } from '@nestjs/common';
import { SenderDto,SenderResDto } from './dto/sender.dto';
import axios from 'axios';

@Injectable()
export class SenderService {

    sendTraffic(sendDto:SenderDto):Promise<SenderResDto>{
        return new Promise(async(resolve,reject)=>{
            try {
              let { 
                dstIP,
                dstPort,
                is_negative,
                check_ip,
                is_ncp_services,
                protocol,
                is_check_tcp_state
               } = sendDto;


              let usingPort = process.env.SERVER_AGENT_BASIC_PORT;
              if(typeof dstPort!=='undefined' && dstPort && dstPort!=="6500"){
                usingPort = dstPort
              }
              let sendRequestURL =  `http://${dstIP}:${usingPort}/recv?check_ip=${check_ip}`;
                
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
