import { Injectable } from '@nestjs/common';
import { SenderDto,SenderResDto } from './dto/sender.dto';
import axios from 'axios';
import { agentStatus, errorExceptionParse } from 'src/utils';

@Injectable()
export class SenderService {

    sendTraffic(sendDto:SenderDto):Promise<SenderResDto>{

      let testResult = false;
      let isGlobalNegative = '';

      let senderAgentStatus = {};
      let receiverAgentStatus = {};

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

               isGlobalNegative = is_negative;
              
          
            // ****************** 테스트 준비 
               
              let usingPort = process.env.SERVER_AGENT_BASIC_PORT;

              if(typeof dstPort!=='undefined' && dstPort && dstPort!=="6500"){
                usingPort = dstPort
              }

              let sendRequestURL =  `http://${dstIP}:${usingPort}/receiver` 
              +`?check_ip=${check_ip}`
              +`&is_ncp_services=${is_ncp_services}`
              +`&protocol=${protocol}`
              +`&is_check_tcp_state=${is_check_tcp_state}`;

              // +``
              // +``;

	console.warn('is ncp services');
	console.warn(is_ncp_services);
	console.warn('protocol');
	console.warn(protocol);
	console.warn('is_check_tcp_state');
	console.warn(is_check_tcp_state);

	console.warn('센드 센드 ㅅ센드 ');
	console.warn(sendRequestURL);
            // ****************** 테스트 시작
              let sendResponse = await axios.get(sendRequestURL,{timeout:5000});

              console.warn(sendResponse.data);

              let { receiveAgentStatus } = sendResponse.data;

              // 전달 받은 receiver Agent 를 옮김 
              receiveAgentStatus = receiveAgentStatus;

              // 여길왔다는 것은 정상 통신이기 때문에 오류입니다.
              if(isGlobalNegative==='Y'){
                testResult=false;
              }

              senderAgentStatus = await agentStatus();

              resolve({
                mainResult:testResult,
                sendurl:sendRequestURL,
                agentStatus:{
                  senderAgent:senderAgentStatus,
                  receiveAgent:receiveAgentStatus
                },
                testLog:"Test Log Positive Connect"
              })

            } catch (error) {
              // 오류라면 ReceiverAgent의 통신이 안되기 때문에 상태를 알수 없음 


              // 오류로 떨어져도 네거티브 케이스이기 때문에 성공 
              if(isGlobalNegative==='Y'){
                testResult = true;
              }
              // 오류로 떨어졌는데 네거티브 케이스가 아니라면 모두 실패 
              else{
                testResult = false;
              }

              let errorLog = await errorExceptionParse(error);

              reject({  
                mainResult:testResult,

                agentStatus:{
                    senderAgent:senderAgentStatus,
                    receiverAgent:{}
                },
                testLog:errorLog
              })
              


            }

        })
    }
}
