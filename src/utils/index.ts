
import * as os from 'node:os'

export async function errorExceptionParse(error:any){


  return 'testErrorLogParsing';
}

export async function agentStatus (){

  let osVersion = os.version();
  let osCPU = os.arch();
  let osHomeDir = os.homedir();
  let osHostname = os.hostname();
  let osNetworkInterface = os.networkInterfaces();
  let osType = os.type();
  let osReleaseVersion = os.release();

  /** 여기서 Port Scan 해서 상태 체크 하여 돌려줌  */

  // Windows 일 경우 
  if(osType.toUpperCase().indexOf('WINDOW')!==-1){
      console.warn('Windows 의 Port Scan ');
  }
  // Windows 가 아닌 경우 ( 대충 Linux 이기 때문에 ) 
  // arp 나 awk 를 통해서 가져온다 
  else{
      console.warn('Linux 의 Port Scan ');
    
  }

  let status = {
    osVersion,
    osCPU,
    osHomeDir,
    osHostname,
    osNetworkInterface,
    osReleaseVersion,
    osType,
    portScan:{

    }
  };

  console.warn(status);

  return status;

}